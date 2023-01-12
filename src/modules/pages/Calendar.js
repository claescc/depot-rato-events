import CalendarIntro from "../../components/CalendarIntro/CalendarIntro"
import EventCards from "../../components/EventCards/EventCards"
// import MetadataInjection from "../../components/EventCards/MetadataInjection"
import UpcomingEvent from "../../components/UpcomingEvent/UpcomingEvent"

export default function Calendar() {
  return (
    <>
      <CalendarIntro />
      <UpcomingEvent />
      {/* <MetadataInjection /> */}
      <EventCards />
    </>
  )
}
