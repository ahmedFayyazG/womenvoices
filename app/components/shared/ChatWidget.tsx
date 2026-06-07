"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const QUICK_QUESTIONS = [
  "What support do you offer?",
  "How do I get help?",
  "English & ESOL classes",
  "Domestic abuse support",
  "Volunteer with us",
  "Find us in Manchester",
];

/* ── icons ── */
function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

/* The FAB uses the Women's Voices flower motif — four petals + centre */
function WVFlower() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <ellipse cx="14" cy="7"  rx="4.5" ry="6.5" fill="#fff" opacity="0.92" />
      <ellipse cx="21" cy="14" rx="6.5" ry="4.5" fill="#fff" opacity="0.78" />
      <ellipse cx="14" cy="21" rx="4.5" ry="6.5" fill="#fff" opacity="0.92" />
      <ellipse cx="7"  cy="14" rx="6.5" ry="4.5" fill="#fff" opacity="0.78" />
      <circle  cx="14" cy="14" r="5"    fill="#FDBE18" />
    </svg>
  );
}

/* Minimal woman silhouette for the header avatar */
function WomanMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="18" fill="#E5007E" />
      {/* head */}
      <circle cx="18" cy="12" r="5" fill="#f7efd9" />
      {/* headwrap stripe */}
      <rect x="13" y="8" width="10" height="3" rx="1.5" fill="#FDBE18" />
      {/* body */}
      <path d="M10 28 Q18 20 26 28" fill="#f7efd9" />
    </svg>
  );
}

function TypingDots() {
  return (
    <div className="chat-typing">
      <span /><span /><span />
    </div>
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen]       = useState(false);
  const [messages, setMessages]   = useState<Message[]>([]);
  const [input, setInput]         = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasGreeted, setHasGreeted]  = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setMessages([{
        role: "assistant",
        content: "Hi, I'm Aisha from Women's Voices.\n\nI'm here to help you find support, learn about our programmes, or answer any questions — in confidence. What can I help you with today?",
      }]);
      setHasGreeted(true);
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isStreaming]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isStreaming) return;

    const newMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setInput("");
    setIsStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok || !res.body) throw new Error("failed");

      const reader  = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const lines = decoder.decode(value, { stream: true }).split("\n");
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);
          if (data === "[DONE]") break;
          try {
            const parsed = JSON.parse(data);
            if (parsed.text) {
              assistantText += parsed.text;
              setMessages((prev) => {
                const u = [...prev];
                u[u.length - 1] = { role: "assistant", content: assistantText };
                return u;
              });
            }
          } catch { /* partial chunk */ }
        }
      }
    } catch {
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: "Sorry, I couldn't connect right now.\n\nPlease call us on **0161 225 6908** or email admin@womensvoices.org.uk — we're always happy to help.",
      }]);
    } finally {
      setIsStreaming(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") { e.preventDefault(); sendMessage(input); }
  }

  function renderContent(text: string) {
    return text.split("\n").map((line, i) => {
      const html = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      return <p key={i} dangerouslySetInnerHTML={{ __html: html || "&nbsp;" }} />;
    });
  }

  const userHasSpoken = messages.some((m) => m.role === "user");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── FAB ── */
        .chat-fab {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 20px 0 14px;
          height: 52px;
          background: #53155f;
          border: none;
          border-radius: 0;
          cursor: pointer;
          box-shadow: 6px 6px 0 #FDBE18;
          transition: background 0.18s, box-shadow 0.18s, transform 0.18s;
          color: #fff;
        }
        .chat-fab:hover {
          background: #3b0e48;
          box-shadow: 4px 4px 0 #FDBE18;
          transform: translate(2px, 2px);
        }
        .chat-fab-label {
          display: flex;
          flex-direction: column;
          line-height: 1;
          font-family: "Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          letter-spacing: 2.4px;
          text-transform: uppercase;
        }
        .chat-fab-label span {
          font-size: 9px;
          font-weight: 500;
          opacity: 0.82;
        }
        .chat-fab-label strong {
          font-size: 13px;
          font-weight: 900;
        }
        .chat-fab-dot {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #E5007E;
          border: 2px solid #fff;
        }

        /* ── Panel ── */
        .chat-panel {
          position: fixed;
          bottom: 100px;
          right: 30px;
          z-index: 9998;
          width: min(380px, calc(100vw - 28px));
          height: min(560px, calc(100vh - 130px));
          background: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 10px 10px 0 rgba(83,21,95,0.14), 0 24px 48px rgba(37,19,41,0.18);
          transform-origin: bottom right;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .chat-panel-hidden {
          opacity: 0;
          transform: scale(0.94) translateY(12px);
          pointer-events: none;
        }

        /* ── Header ── */
        .chat-header {
          background: #3b0e48;
          padding: 0;
          flex-shrink: 0;
          position: relative;
        }
        .chat-header-top {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px 12px;
        }
        .chat-header-text {
          flex: 1;
          min-width: 0;
        }
        .chat-header-name {
          font-family: "Gutenberg Clean Regular",Georgia,serif;
          font-size: 18px;
          font-weight: 400;
          color: #fff;
          margin: 0;
          line-height: 1.15;
          letter-spacing: 0;
        }
        .chat-header-sub {
          font-family: "Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #FDBE18;
          margin: 3px 0 0;
        }
        .chat-header-stripe {
          height: 4px;
          background: linear-gradient(90deg, #E5007E 0%, #FDBE18 50%, #14a28d 100%);
        }
        .chat-collapse-btn {
          background: none;
          border: none;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 4px;
          transition: color 0.15s;
        }
        .chat-collapse-btn:hover { color: #fff; }

        /* ── Messages ── */
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 18px 16px 8px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #faf8f4;
        }
        .chat-messages::-webkit-scrollbar { width: 3px; }
        .chat-messages::-webkit-scrollbar-thumb { background: rgba(83,21,95,0.15); }

        .chat-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
        }
        .chat-row-user { justify-content: flex-end; }
        .chat-row-assistant { justify-content: flex-start; }

        .chat-avatar-small {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          margin-bottom: 2px;
        }

        .chat-bubble {
          max-width: 82%;
          padding: 9px 13px;
          font-size: 13.5px;
          line-height: 1.52;
          word-break: break-word;
          font-family: "Avenir LT 55 Regular","Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
        }
        .chat-bubble p { margin: 0 0 5px; }
        .chat-bubble p:last-child { margin: 0; }

        .chat-bubble-user {
          background: #53155f;
          color: #fff;
          border-radius: 8px 8px 2px 8px;
        }
        .chat-bubble-assistant {
          background: #fff;
          color: #251329;
          border-radius: 2px 8px 8px 8px;
          border-left: 3px solid #E5007E;
          box-shadow: 0 1px 4px rgba(37,19,41,0.07);
        }

        .chat-typing {
          display: flex;
          gap: 4px;
          padding: 4px 0;
          align-items: center;
        }
        .chat-typing span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #E5007E;
          opacity: 0.4;
          animation: chatDot 1.1s ease-in-out infinite;
        }
        .chat-typing span:nth-child(2) { animation-delay: 0.18s; }
        .chat-typing span:nth-child(3) { animation-delay: 0.36s; }
        @keyframes chatDot {
          0%,80%,100% { transform: translateY(0); opacity: 0.35; }
          40%          { transform: translateY(-4px); opacity: 1; }
        }

        /* ── Quick questions ── */
        .chat-quick {
          padding: 10px 14px 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          background: #fff;
          border-top: 1px solid rgba(83,21,95,0.07);
          flex-shrink: 0;
        }
        .chat-quick-label {
          width: 100%;
          font-family: "Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(83,21,95,0.45);
          margin: 0 0 4px;
        }
        .chat-quick-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          background: transparent;
          border: 1px solid rgba(83,21,95,0.25);
          color: #53155f;
          font-family: "Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          padding: 5px 10px;
          cursor: pointer;
          transition: background 0.14s, border-color 0.14s, color 0.14s;
          white-space: nowrap;
          border-radius: 2px;
        }
        .chat-quick-btn:hover {
          background: #53155f;
          border-color: #53155f;
          color: #fff;
        }

        /* ── Input ── */
        .chat-input-area {
          background: #fff;
          border-top: 1px solid rgba(83,21,95,0.1);
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .chat-input {
          flex: 1;
          height: 38px;
          border: 1px solid rgba(83,21,95,0.2);
          padding: 0 12px;
          font: inherit;
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 13.5px;
          color: #251329;
          outline: none;
          background: #faf8f4;
          border-radius: 2px;
          transition: border-color 0.15s;
        }
        .chat-input:focus { border-color: #53155f; background: #fff; }
        .chat-input::placeholder { color: rgba(37,19,41,0.38); }
        .chat-send {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          background: #E5007E;
          border: none;
          border-radius: 2px;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.14s;
        }
        .chat-send:hover   { background: #b8006a; }
        .chat-send:disabled { background: rgba(229,0,126,0.3); cursor: not-allowed; }

        .chat-footer-note {
          background: #fff;
          text-align: center;
          font-size: 10px;
          color: rgba(37,19,41,0.35);
          padding: 0 14px 10px;
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          flex-shrink: 0;
        }

        @media (max-width: 480px) {
          .chat-fab {
            bottom: 18px;
            right: 16px;
            width: 48px;
            height: 48px;
            padding: 0;
            justify-content: center;
            box-shadow: 4px 4px 0 #FDBE18;
          }
          .chat-fab-label { display: none; }
          .chat-fab-dot {
            position: absolute;
            top: 8px;
            right: 8px;
          }
          .chat-panel { bottom: 80px; right: 16px; width: calc(100vw - 32px); }
        }
      `}} />

      {/* ── FAB ── */}
      <button
        className="chat-fab"
        aria-label="Open Women's Voices chat"
        onClick={() => setIsOpen((o) => !o)}
      >
        <WVFlower />
        <span className="chat-fab-label">
          <span>{isOpen ? "close" : "talk to"}</span>
          <strong>Women&apos;s Voices</strong>
        </span>
        {!isOpen && <span className="chat-fab-dot" aria-hidden="true" />}
      </button>

      {/* ── Panel ── */}
      <div
        className={`chat-panel${isOpen ? "" : " chat-panel-hidden"}`}
        role="dialog"
        aria-label="Women's Voices support chat"
      >
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-top">
            <WomanMark />
            <div className="chat-header-text">
              <p className="chat-header-name">Aisha</p>
              <p className="chat-header-sub">Women&apos;s Voices · Support</p>
            </div>
            <button
              className="chat-collapse-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <ChevronDown />
            </button>
          </div>
          <div className="chat-header-stripe" aria-hidden="true" />
        </div>

        {/* Messages */}
        <div className="chat-messages" role="log" aria-live="polite">
          {messages.map((msg, i) => {
            const isUser = msg.role === "user";
            const isLast = i === messages.length - 1;
            const showTyping = isStreaming && isLast && msg.role === "assistant" && !msg.content;
            return (
              <div key={i} className={`chat-row ${isUser ? "chat-row-user" : "chat-row-assistant"}`}>
                {!isUser && (
                  <div className="chat-avatar-small" aria-hidden="true">
                    <WomanMark />
                  </div>
                )}
                <div className={`chat-bubble ${isUser ? "chat-bubble-user" : "chat-bubble-assistant"}`}>
                  {showTyping ? <TypingDots /> : renderContent(msg.content)}
                </div>
              </div>
            );
          })}
          {isStreaming && messages[messages.length - 1]?.content === "" && null /* handled above */}
          <div ref={bottomRef} />
        </div>

        {/* Quick questions */}
        {!userHasSpoken && (
          <div className="chat-quick">
            <p className="chat-quick-label">Quick questions</p>
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                className="chat-quick-btn"
                onClick={() => sendMessage(q)}
                disabled={isStreaming}
              >
                <ArrowRight />
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chat-input-area">
          <input
            ref={inputRef}
            className="chat-input"
            type="text"
            placeholder="Ask anything…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Type your message"
          />
          <button
            className="chat-send"
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isStreaming}
            aria-label="Send"
          >
            <ArrowRight />
          </button>
        </div>
        <p className="chat-footer-note">
          Emergencies — call 999 &nbsp;·&nbsp; Domestic abuse helpline 0808 2000 247
        </p>
      </div>
    </>
  );
}
