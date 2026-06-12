const weekdays = ["Pon", "Uto", "Sre", "Čet", "Pet", "Sub", "Ned"];
const leadingDays = 1;
const daysInMonth = 30;
const selectedDay = 26;

const calendarCells = [
  ...Array.from({ length: leadingDays }, (_, index) => ({
    key: `empty-${index}`,
    day: "",
  })),
  ...Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;

    return {
      key: `day-${day}`,
      day,
      isSelected: day === selectedDay,
    };
  }),
];

export default function CalendarSection() {
  return (
    <section className="calendar-section" aria-label="Datum vencanja">
      <div className="calendar-card">
        <div className="calendar-picture">
          <h2>26. septembar 2026.</h2>
        </div>

        <div className="calendar-date" aria-label="Septembar 2026">
          {weekdays.map((weekday, index) => (
            <div className="calendar-day" key={`${weekday}-${index}`}>
              {weekday}
            </div>
          ))}

          {calendarCells.map(({ key, day, isSelected }) => (
            <div
              className={`calendar-number${isSelected ? " calendar-number-current" : ""}`}
              key={key}
            >
              {isSelected ? (
                <>
                  <svg
                    className="calendar-heart"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M20.8,4.6c-2.1-2.1-5.5-2.1-7.6,0L12,5.8l-1.2-1.2c-2.1-2.1-5.5-2.1-7.6,0s-2.1,5.5,0,7.6l1.2,1.2L12,21l7.6-7.6l1.2-1.2C22.9,10.1,22.9,6.7,20.8,4.6z" />
                  </svg>
                  <span className="calendar-current-day">{day}</span>
                </>
              ) : (
                day
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
