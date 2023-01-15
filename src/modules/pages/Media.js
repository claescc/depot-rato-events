import EmptyState from "../../components/EmptyState/EmptyState"
import ComponentSpacer from "../../components/ComponentSpacer/ComponentSpacer"
import MediaIntro from "../../components/MediaIntro/MediaIntro"
import MediaWindow from "../../components/MediaWindow/MediaWindow"

export default function Media() {
  return (
    <>
      <ComponentSpacer />
      <MediaIntro />
      <ComponentSpacer />

      <MediaWindow />
      <EmptyState />
      <ComponentSpacer />
    </>
  )
}
