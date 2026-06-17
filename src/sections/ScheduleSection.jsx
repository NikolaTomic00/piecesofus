const scheduleItems = [
  {
    title: 'Skup svatova',
    place: 'Kod porodice Stefanović',
    time: '10:00h',
    iconClass: 'schedule-icon-suit',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beograd',
  },
  {
    title: 'Polazak po mladu',
    place: 'Kod porodice Marković',
    time: '11:00h',
    iconClass: 'schedule-icon-dress',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Novi%20Sad',
    reverse: true,
  },
  {
    title: 'Crkveno venčanje',
    place: 'Saborni hram svetog velikomučenika Georgija',
    time: '14:00h',
    iconClass: 'schedule-icon-rings',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Saborni%20hram%20svetog%20velikomu%C4%8Denika%20Georgija',
  },
  {
    title: 'Svečana proslava',
    place: 'Hotel Sheraton, Novi Sad',
    time: '16:00h',
    iconClass: 'schedule-icon-couple',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel%20Sheraton%20Novi%20Sad',
    reverse: true,
  },
];

function ScheduleText({ title, place, time, mapUrl }) {
  return (
    <div className="schedule-copy">
      <h2 className="font-['Allura',cursive] text-[2rem] font-normal">
        {title}
      </h2>
      <p className="text-[1.125rem]">{place}</p>
      <strong className="font-['Cormorant_Infant',Georgia,serif] text-[1.75rem]">{time}</strong>
      <a
        className="font-['Cormorant_Infant',Georgia,serif] text-[0.78rem]"
        href={mapUrl}
        target="_blank"
        rel="noreferrer"
      >
        Pogledaj na mapi
      </a>
    </div>
  );
}

function ScheduleIcon({ iconClass }) {
  return (
    <div className="schedule-icon-wrap" aria-hidden="true">
      <span className={`schedule-icon ${iconClass}`} />
    </div>
  );
}

function ScheduleConnector({ variant = 1 }) {
  return (
    <div className="schedule-connector" aria-hidden="true">
      <span className={`schedule-line schedule-line-${variant}`} />
    </div>
  );
}

export default function ScheduleSection() {
  return (
    <section className="schedule-section" aria-label="Raspored venčanja">
      <div className="schedule-list">
        {scheduleItems.map((item, index) => (
          <div className="schedule-block" key={item.title}>
            <div className={`schedule-row${item.reverse ? ' schedule-row-reverse' : ''}`}>
              {item.reverse ? (
                <>
                  <ScheduleIcon iconClass={item.iconClass} />
                  <ScheduleText
                    title={item.title}
                    place={item.place}
                    time={item.time}
                    mapUrl={item.mapUrl}
                  />
                </>
              ) : (
                <>
                  <ScheduleText
                    title={item.title}
                    place={item.place}
                    time={item.time}
                    mapUrl={item.mapUrl}
                  />
                  <ScheduleIcon iconClass={item.iconClass} />
                </>
              )}
            </div>

            {index < scheduleItems.length - 1 ? (
              <ScheduleConnector variant={(index % 2) + 1} />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
