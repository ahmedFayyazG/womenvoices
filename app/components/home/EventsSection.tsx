"use client";

import { useMemo, useState } from "react";

type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "upcoming" | "past";
  description: string;
};

const events: EventItem[] = [
  {
    id: "wellbeing-circle",
    title: "Women’s Wellbeing Circle",
    date: "2026-06-10",
    time: "10:30 AM",
    location: "Women’s Voices Community Centre",
    type: "upcoming",
    description:
      "A calm group session focused on connection, emotional wellbeing, confidence, and peer support for women across the community.",
  },
  {
    id: "esol-skills",
    title: "ESOL & Skills Workshop",
    date: "2026-06-17",
    time: "12:00 PM",
    location: "Manchester Community Learning Space",
    type: "upcoming",
    description:
      "A practical learning workshop supporting communication, digital confidence, everyday English, and pathways into further opportunities.",
  },
  {
    id: "leadership-forum",
    title: "Community Leadership Forum",
    date: "2026-06-24",
    time: "2:00 PM",
    location: "Longsight, Manchester",
    type: "upcoming",
    description:
      "A leadership and advocacy forum for women to share lived experience, build confidence, and shape community priorities together.",
  },
  {
    id: "creative-gathering",
    title: "Creative Community Gathering",
    date: "2026-06-03",
    time: "11:00 AM",
    location: "Women’s Voices Community Centre",
    type: "past",
    description:
      "A creative gathering with storytelling, conversation, and practical activities designed to reduce isolation and strengthen belonging.",
  },
  {
    id: "rights-session",
    title: "Health, Rights & Inclusion Session",
    date: "2026-05-28",
    time: "1:30 PM",
    location: "Manchester, United Kingdom",
    type: "past",
    description:
      "An information session supporting women with health awareness, legal rights education, equality, and inclusive community support.",
  },
];

const initialMonthDate = new Date("2026-06-01T00:00:00");
const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getCalendarDays(monthDate: Date) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = (firstDay.getDay() + 6) % 7;

  return Array.from({ length: 42 }, (_, index) => {
    const dayNumber = index - firstWeekday + 1;

    if (dayNumber < 1 || dayNumber > daysInMonth) {
      return null;
    }

    return dayNumber;
  });
}

function formatMonthLabel(monthDate: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
  }).format(monthDate);
}

function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export function EventsSection() {
  const [selectedId, setSelectedId] = useState(events[0].id);
  const [visibleMonth, setVisibleMonth] = useState(initialMonthDate);
  const selectedEvent = events.find((event) => event.id === selectedId) ?? events[0];
  const days = useMemo(() => getCalendarDays(visibleMonth), [visibleMonth]);
  const monthLabel = useMemo(() => formatMonthLabel(visibleMonth), [visibleMonth]);

  const eventsByDay = useMemo(() => {
    return events.reduce<Record<number, EventItem[]>>((acc, event) => {
      const eventDate = new Date(`${event.date}T12:00:00`);
      if (
        eventDate.getMonth() !== visibleMonth.getMonth() ||
        eventDate.getFullYear() !== visibleMonth.getFullYear()
      ) {
        return acc;
      }

      const day = eventDate.getDate();
      acc[day] = [...(acc[day] ?? []), event];
      return acc;
    }, {});
  }, [visibleMonth]);

  const goToPreviousMonth = () => {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1));
  };

  const goToEventMonth = (event: EventItem) => {
    const eventDate = new Date(`${event.date}T12:00:00`);
    setVisibleMonth(new Date(eventDate.getFullYear(), eventDate.getMonth(), 1));
    setSelectedId(event.id);
  };

  return (
    <section className="events-calendar-section section-reveal">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .events-calendar-section {
              background: #F7EFD9;
              padding: 88px 0 170px;
              position: relative;
              overflow: hidden;
            }

            .events-calendar-container {
              width: min(1180px, calc(100% - 48px));
              margin: 0 auto;
            }

            .events-section-heading {
              margin: 0 0 34px;
              color: #4E9473;
              font-family: "Gutenberg Clean Regular", "AMwA Font Medium", sans-serif;
              font-size: clamp(40px, 5vw, 66px);
              line-height: 0.96;
              text-transform: uppercase;
              text-align: center;
            }

            .apple-calendar-shell {
              overflow: hidden;
              border: 1px solid #d9d9de;
              border-radius: 16px;
              background: #f5f5f7;
              box-shadow: 0 24px 70px rgba(28, 28, 30, 0.12);
            }

            .calendar-toolbar {
              height: 64px;
              display: grid;
              grid-template-columns: 160px 1fr 160px;
              align-items: center;
              padding: 0 18px;
              background: linear-gradient(#f8f8fa, #eeeeef);
              border-bottom: 1px solid #d2d2d7;
            }

            .window-dots {
              display: flex;
              gap: 8px;
            }

            .window-dot {
              width: 12px;
              height: 12px;
              border-radius: 50%;
              display: block;
            }

            .window-dot.red { background: #ff5f57; }
            .window-dot.yellow { background: #ffbd2e; }
            .window-dot.green { background: #28c840; }

            .calendar-title {
              margin: 0;
              color: #1d1d1f;
              font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Avenir LT 55 Regular", sans-serif;
              font-size: 24px;
              font-weight: 700;
              text-align: center;
              letter-spacing: -0.3px;
            }

            .calendar-view-pill {
              justify-self: end;
              display: flex;
              align-items: center;
              gap: 7px;
              border: 1px solid #c7c7cc;
              background: #ffffff;
              border-radius: 8px;
              padding: 5px;
              color: #3a3a3c;
              font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
              font-size: 13px;
              font-weight: 600;
            }

            .calendar-nav-button {
              width: 30px;
              height: 28px;
              border: 0;
              border-radius: 6px;
              background: transparent;
              color: #1d1d1f;
              font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
              font-size: 18px;
              line-height: 1;
              cursor: pointer;
            }

            .calendar-nav-button:hover {
              background: #eeeeef;
            }

            .calendar-nav-label {
              padding: 0 6px;
            }

            .event-month-list {
              margin-top: 18px;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 10px;
            }

            .event-month-link {
              border: 1px solid #d2d2d7;
              background: #ffffff;
              color: #1d1d1f;
              border-radius: 999px;
              padding: 8px 12px;
              font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
              font-size: 13px;
              font-weight: 700;
              cursor: pointer;
            }

            .event-month-link.is-selected {
              background: #e5007e;
              border-color: #e5007e;
              color: #ffffff;
            }

            .calendar-weekdays {
              display: grid;
              grid-template-columns: repeat(7, 1fr);
              background: #ffffff;
              border-bottom: 1px solid #e5e5ea;
            }

            .calendar-weekday {
              padding: 12px 10px;
              color: #6e6e73;
              font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
              font-size: 12px;
              font-weight: 700;
              text-align: center;
              text-transform: uppercase;
            }

            .calendar-grid {
              display: grid;
              grid-template-columns: repeat(7, minmax(0, 1fr));
              background: #e5e5ea;
              gap: 1px;
            }

            .calendar-cell {
              min-height: 118px;
              background: #ffffff;
              border: 0;
              padding: 10px;
              text-align: left;
              display: flex;
              flex-direction: column;
              gap: 8px;
              cursor: default;
            }

            .calendar-cell.is-empty {
              background: #f7f7f8;
            }

            .calendar-cell.has-event {
              cursor: pointer;
            }

            .calendar-day-number {
              width: 28px;
              height: 28px;
              border-radius: 50%;
              display: inline-grid;
              place-items: center;
              color: #1d1d1f;
              font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
              font-size: 14px;
              font-weight: 600;
            }

            .calendar-day-number.is-selected {
              background: #e5007e;
              color: #ffffff;
            }

            .calendar-event-pill {
              width: 100%;
              border: 0;
              border-radius: 6px;
              padding: 6px 7px;
              color: #ffffff;
              font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Avenir LT 55 Regular", sans-serif;
              font-size: 12px;
              font-weight: 700;
              line-height: 1.2;
              text-align: left;
              cursor: pointer;
              background: #e5007e;
            }

            .calendar-event-pill.is-past {
              background: #8e8e93;
            }

            .calendar-event-pill.is-selected {
              outline: 2px solid #1d1d1f;
              outline-offset: 1px;
            }

            .events-details-panel {
              margin-top: 34px;
              display: grid;
              grid-template-columns: 0.58fr 1.42fr;
              border: 1px solid #e5e5ea;
              background: #ffffff;
            }

            .event-date-card {
              background: #f5f5f7;
              padding: 34px;
              border-right: 1px solid #e5e5ea;
            }

            .event-status {
              display: inline-flex;
              margin-bottom: 22px;
              background: #e5007e;
              color: #ffffff;
              padding: 8px 12px;
              border-radius: 999px;
              font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
              font-size: 12px;
              font-weight: 800;
              letter-spacing: 1.4px;
              text-transform: uppercase;
            }

            .event-status.is-past {
              background: #8e8e93;
            }

            .event-date {
              margin: 0;
              color: #1d1d1f;
              font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Avenir LT 55 Regular", sans-serif;
              font-size: clamp(28px, 3vw, 42px);
              line-height: 1.05;
              font-weight: 800;
              letter-spacing: -0.6px;
            }

            .event-body-card {
              padding: 34px 40px;
            }

            .event-title {
              margin: 0 0 16px;
              color: #8E2A91;
              font-family: "Gutenberg Clean Regular", "AMwA Font Medium", sans-serif;
              font-size: clamp(30px, 3.2vw, 48px);
              line-height: 1;
              text-transform: uppercase;
            }

            .event-meta {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              margin-bottom: 22px;
            }

            .event-meta span {
              background: #F9D007;
              color: #1d1d1f;
              padding: 9px 12px;
              border-radius: 999px;
              font-family: "Avenir LT 55 Regular", sans-serif;
              font-size: 13px;
              font-weight: 700;
            }

            .event-description {
              max-width: 780px;
              margin: 0;
              color: #1d1d1f;
              font-family: "Avenir LT 55 Regular", sans-serif;
              font-size: 16px;
              line-height: 1.7;
            }

            .events-bottom-curve {
              position: absolute;
              left: 0;
              bottom: -1px;
              width: 100%;
              height: 92px;
              pointer-events: none;
            }

            .events-bottom-curve svg {
              display: block;
              width: 100%;
              height: 100%;
            }

            @media (max-width: 1024px) {
              .calendar-cell {
                min-height: 104px;
              }

              .events-details-panel {
                grid-template-columns: 1fr;
              }

              .event-date-card {
                border-right: 0;
                border-bottom: 1px solid #e5e5ea;
              }
            }

            @media (max-width: 720px) {
              .events-calendar-section {
                padding: 64px 0 128px;
              }

              .events-calendar-container {
                width: min(100% - 28px, 1180px);
              }

              .calendar-toolbar {
                height: auto;
                min-height: 58px;
                grid-template-columns: 58px 1fr 96px;
                padding: 10px;
              }

              .window-dot {
                width: 9px;
                height: 9px;
              }

              .calendar-title {
                font-size: 18px;
              }

              .calendar-view-pill {
                font-size: 11px;
                padding: 4px;
              }

              .calendar-nav-label {
                display: none;
              }

              .calendar-nav-button {
                width: 28px;
                height: 26px;
              }

              .calendar-weekday {
                padding: 9px 3px;
                font-size: 10px;
              }

              .calendar-cell {
                min-height: 74px;
                padding: 6px;
                gap: 4px;
              }

              .calendar-day-number {
                width: 22px;
                height: 22px;
                font-size: 12px;
              }

              .calendar-event-pill {
                padding: 4px 5px;
                font-size: 10px;
              }

              .event-date-card,
              .event-body-card {
                padding: 24px;
              }
            }
          `,
        }}
      />

      <div className="events-calendar-container">
        <h2 className="events-section-heading">Upcoming Events</h2>

        <div className="apple-calendar-shell">
          <div className="calendar-toolbar">
            <div className="window-dots" aria-hidden="true">
              <span className="window-dot red" />
              <span className="window-dot yellow" />
              <span className="window-dot green" />
            </div>
            <h3 className="calendar-title">{monthLabel}</h3>
            <div className="calendar-view-pill" aria-label="Calendar month navigation">
              <button
                className="calendar-nav-button"
                type="button"
                aria-label="Previous month"
                onClick={goToPreviousMonth}
              >
                ‹
              </button>
              <span className="calendar-nav-label">Month</span>
              <button
                className="calendar-nav-button"
                type="button"
                aria-label="Next month"
                onClick={goToNextMonth}
              >
                ›
              </button>
            </div>
          </div>

          <div className="calendar-weekdays">
            {weekdayLabels.map((weekday) => (
              <div className="calendar-weekday" key={weekday}>
                {weekday}
              </div>
            ))}
          </div>

          <div className="calendar-grid">
            {days.map((day, index) => {
              const dayEvents = day ? eventsByDay[day] ?? [] : [];
              const hasSelectedEvent = dayEvents.some((event) => event.id === selectedId);

              return (
                <div
                  className={`calendar-cell ${day ? "" : "is-empty"} ${
                    dayEvents.length ? "has-event" : ""
                  }`}
                  key={`${day ?? "empty"}-${index}`}
                >
                  {day ? (
                    <>
                      <span
                        className={`calendar-day-number ${
                          hasSelectedEvent ? "is-selected" : ""
                        }`}
                      >
                        {day}
                      </span>
                      {dayEvents.map((event) => (
                        <button
                          className={`calendar-event-pill ${
                            event.type === "past" ? "is-past" : ""
                          } ${event.id === selectedId ? "is-selected" : ""}`}
                          key={event.id}
                          type="button"
                          onClick={() => setSelectedId(event.id)}
                        >
                          {event.title}
                        </button>
                      ))}
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="event-month-list" aria-label="Jump to event month">
          {events.map((event) => (
            <button
              className={`event-month-link ${event.id === selectedId ? "is-selected" : ""}`}
              key={event.id}
              type="button"
              onClick={() => goToEventMonth(event)}
            >
              {formatEventDate(event.date).replace(/^\w+, /, "")}
            </button>
          ))}
        </div>

        <div className="events-details-panel" aria-live="polite">
          <div className="event-date-card">
            <span className={`event-status ${selectedEvent.type === "past" ? "is-past" : ""}`}>
              {selectedEvent.type}
            </span>
            <p className="event-date">{formatEventDate(selectedEvent.date)}</p>
          </div>
          <div className="event-body-card">
            <h3 className="event-title">{selectedEvent.title}</h3>
            <div className="event-meta">
              <span>{selectedEvent.time}</span>
              <span>{selectedEvent.location}</span>
            </div>
            <p className="event-description">{selectedEvent.description}</p>
          </div>
        </div>
      </div>

      <div className="events-bottom-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 L0,26 Q720,112 1440,26 L1440,100 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}
