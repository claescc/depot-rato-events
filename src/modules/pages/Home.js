import ComponentSpacer from "../../components/ComponentSpacer/ComponentSpacer"
import Hero from "../../components/Hero/Hero"
import UpcomingEvent from "../../components/UpcomingEvent/UpcomingEvent"
import Welcome from "../../components/Welcome/Welcome"

export default function Home() {
  return (
    <>
      <Hero />
      <ComponentSpacer />
      <Welcome />
      <ComponentSpacer />

      <UpcomingEvent />
    </>
  )
}
