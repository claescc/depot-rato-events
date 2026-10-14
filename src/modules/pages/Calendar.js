import CalendarIntro from "../../components/CalendarIntro/CalendarIntro"
import ComponentSpacer from "../../components/ComponentSpacer/ComponentSpacer"
import EventCards from "../../components/EventCards/EventCards"
import PreRegisterForEvent from "../../components/PreRegisterForEvent/PreRegisterForEvent"
import UpcomingEvent from "../../components/UpcomingEvent/UpcomingEvent"

export default function Calendar() {
  return (
    <>
      <ComponentSpacer />
      <CalendarIntro />
      <ComponentSpacer />

      <UpcomingEvent />
      <ComponentSpacer />

      <PreRegisterForEvent />
      <ComponentSpacer />

      <EventCards />
      <ComponentSpacer />
    </>
  )
}
