const scheduleItems = [
  {
    title: "Crkveno venčanje",
    place: "Saborni hram svetog velikomučenika Georgija",
    time: "14:00h",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Saborni%20hram%20svetog%20velikomu%C4%8Denika%20Georgija",
  },
  {
    title: "Svečana proslava",
    place: "Hotel Sheraton, Novi Sad",
    time: "16:00h",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Hotel%20Sheraton%20Novi%20Sad",
    inverse: true,
  },
];

function ScheduleCard({ title, place, time, mapUrl, inverse }) {
  return (
    <article className={`schedule-card${inverse ? " schedule-card-inverse" : ""}`}>
      <time>{time}</time>
      <h3>{title}</h3>
      <p>{place}</p>
      <a href={mapUrl} target="_blank" rel="noreferrer">
        Pogledaj lokaciju
      </a>
    </article>
  );
}

export default function ScheduleSection() {
  return (
    <section className="schedule-section" aria-label="Svečani program">
      <div className="schedule-list">
        <div className="schedule-heading">
          <h2>Svečani program</h2>
        </div>

        {scheduleItems.map((item) => (
          <ScheduleCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}