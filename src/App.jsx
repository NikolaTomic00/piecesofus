import ProfilePicSection from './sections/ProfilePicSection.jsx';
import CalendarSection from './sections/CalendarSection.jsx';
import ScheduleSection from './sections/ScheduleSection.jsx';

export default function App() {
  return (
    <main className="invitation-bg min-h-svh">
      <ProfilePicSection />
      <CalendarSection />
      <ScheduleSection />
    </main>
  );
}
