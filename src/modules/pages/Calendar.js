import CalendarIntro from "../../components/CalendarIntro/CalendarIntro"
import ComponentSpacer from "../../components/ComponentSpacer/ComponentSpacer"
import EventCards from "../../components/EventCards/EventCards"
// import MetadataInjection from "../../components/EventCards/MetadataInjection"
import UpcomingEvent from "../../components/UpcomingEvent/UpcomingEvent"

export default function Calendar() {
  return (
    <>
      <ComponentSpacer />
      <CalendarIntro />
      <ComponentSpacer />

      <UpcomingEvent />
      <ComponentSpacer />

      {/* <MetadataInjection /> */}
      <EventCards />
      <ComponentSpacer />
    </>
  )
}
