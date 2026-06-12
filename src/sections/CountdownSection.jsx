import { useEffect, useState } from 'react';

const weddingDate = new Date('2026-09-26T00:00:00+02:00').getTime();

function getTimeLeft() {
  const difference = Math.max(0, weddingDate - Date.now());
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference / 3600000) % 24);
  const minutes = Math.floor((difference / 60000) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function TimeBlock({ label, value, minDigits = 2 }) {
  return (
    <div className="countdown-block">
      <span className="countdown-value">{String(value).padStart(minDigits, '0')}</span>
      <span className="countdown-label">{label}</span>
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const countdownInterval = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(countdownInterval);
  }, []);

  return (
    <section className="countdown-section" aria-label="Odbrojavanje do vencanja">
      <div className="countdown-inner">
        <div className="countdown-date-row">
          <span />
          <p>26/09/2026</p>
          <span />
        </div>

        <h2 className="countdown-heading">Brojimo zajedno</h2>

        <div className="countdown-timer" role="timer" aria-live="polite">
          <TimeBlock label="Dani" value={timeLeft.days} minDigits={timeLeft.days > 99 ? 3 : 2} />
          <TimeBlock label="Sati" value={timeLeft.hours} />
          <TimeBlock label="Min" value={timeLeft.minutes} />
          <TimeBlock label="Sek" value={timeLeft.seconds} />
        </div>
      </div>
    </section>
  );
}
