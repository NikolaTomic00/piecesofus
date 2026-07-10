import PetalMark from "../components/PetalMark.jsx";

function FooterSection() {
  return (
    <footer className="footer-section">
      <PetalMark />
      <p className="footer-initials">I &amp; A</p>
      <span className="footer-note">Radosno vas očekujemo.</span>
      <p className="footer-legal">
        © 2026{" "}
        <a href="https://epozivnice.online" target="_blank" rel="noreferrer">
          epozivnice.online
        </a>
        . Sva prava zadržana.
      </p>
    </footer>
  );
}

export default FooterSection;
