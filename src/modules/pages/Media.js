import ComponentSpacer from "../../components/ComponentSpacer/ComponentSpacer"
import MediaIntro from "../../components/MediaIntro/MediaIntro"
import MediaWindow from "../../components/MediaWindow/MediaWindow"
import InstagramFeature from "../../components/InstagramFeature/InstagramFeature"
import MediaFeedIntro from "../../components/MediaFeedIntro/MediaFeedIntro"

export default function Media() {
  return (
    <>
      <ComponentSpacer />
      <MediaIntro />
      <ComponentSpacer />
      <MediaWindow />
      <ComponentSpacer />
      <MediaFeedIntro />
      <InstagramFeature token={process.env.REACT_APP_DRE_INSTAGRAM_TOKEN} limit={1} />
      <ComponentSpacer />
    </>
  )
}
