import CalendarIntro from "../../components/CalendarIntro/CalendarIntro"
import EventCards from "../../components/EventCards/EventCards"
import UpcomingEvent from "../../components/UpcomingEvent/UpcomingEvent"

export default function Calendar() {
  return (
    <main>
      <CalendarIntro />
      <UpcomingEvent />
      <EventCards />
    </main>
  )
}
