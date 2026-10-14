import Hero from "../../components/Hero/Hero"
import PreRegisterForEvent from "../../components/PreRegisterForEvent/PreRegisterForEvent"
import UpcomingEvent from "../../components/UpcomingEvent/UpcomingEvent"
import Welcome from "../../components/Welcome/Welcome"
import MuseumDisclaimer from "../../components/MuseumDisclaimer/MuseumDisclaimer"

export default function Home() {
  return (
    <>
      <Hero />
      <MuseumDisclaimer />
      <Welcome />
      <UpcomingEvent />
      <PreRegisterForEvent />
    </>
  )
}
