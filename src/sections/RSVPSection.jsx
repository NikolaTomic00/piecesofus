function CheckIcon() {
  return (
    <svg
      className="rsvp-check-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function RSVPButton({ children, href }) {
  return (
    <a className="rsvp-button rsvp-button-pulse text-[0.875rem]" href={href}>
      <span className="rsvp-button-content">{children}</span>
    </a>
  );
}

export default function RSVPSection() {
  return (
    <section className="rsvp-section" aria-label="RSVP">
      <div className="rsvp-inner">
        <h2 className="rsvp-title">Radujemo se vašem dolasku</h2>

        <p className="rsvp-text text-[1rem]">
          Molimo vas da potvrdite dolazak klikom na dugme ispod.
        </p>

        <span className="rsvp-ornament rsvp-ornament-top" aria-hidden="true" />

        <RSVPButton href="https://docs.google.com/forms/d/e/1FAIpQLSdmWj9fsw7zgAPd_51eBlPMMvcSGrxClSnLJPzPWzSSJNHqAQ/viewform?usp=dialog">
          <CheckIcon />
          Potvrdi dolazak
        </RSVPButton>

        <span
          className="rsvp-ornament rsvp-ornament-bottom"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
