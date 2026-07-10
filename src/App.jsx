import ProfilePicSection from "./sections/ProfilePicSection.jsx";
import CalendarSection from "./sections/CalendarSection.jsx";
import CountdownSection from "./sections/CountdownSection.jsx";
import FooterSection from "./sections/FooterSection.jsx";
import RSVPSection from "./sections/RSVPSection.jsx";
import ScheduleSection from "./sections/ScheduleSection.jsx";

export default function App() {
  return (
    <main className="invitation-bg min-h-svh">
      <ProfilePicSection />
      <CalendarSection />
      <ScheduleSection />
      <CountdownSection />
      <RSVPSection />
      <FooterSection />
    </main>
  );
}
