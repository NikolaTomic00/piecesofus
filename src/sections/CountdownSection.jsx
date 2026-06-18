import { useEffect, useState } from 'react';

const weddingDate = new Date('2026-09-26T00:00:00+02:00').getTime();

function getTimeLeft() {
  const difference = Math.max(weddingDate - Date.now(), 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownBox({ value, label }) {
  return (
    <div className="countdown-box">
      <div className="countdown-value">
        <span>{String(value).padStart(2, '0')}</span>
      </div>
      <span className="countdown-label">{label}</span>
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdownItems = [
    ['days', 'dani'],
    ['hours', 'sati'],
    ['minutes', 'minuti'],
    ['seconds', 'sekunde'],
  ];

  return (
    <section className="countdown-section" aria-label="Countdown">
      <div className="countdown-inner">
        <div className="countdown-date-row">
          <span />
          <p className="text-[1.5rem]">26/09/2026</p>
          <span />
        </div>

        <p className="countdown-title text-[3rem]">Brojimo zajedno</p>

        <div className="countdown-grid" role="timer" aria-live="polite">
          {countdownItems.map(([key, label]) => (
            <CountdownBox key={key} value={timeLeft[key]} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
