import React from "react"

const Feed = props => {
  const { id, caption, media_type, media_url } = props.feed
  let post

  switch (media_type) {
    case "VIDEO":
      post = <video className="dre-media-insta-types" src={media_url} type="video/mp4" controls></video>
      break
    case "CAROUSEL_ALBUM":
      post = <img className="dre-media-insta-types" id={id} src={media_url} alt={caption} />
      break
    default:
      post = <img className="dre-media-insta-types" id={id} src={media_url} alt={caption} />
  }

  return <React.Fragment>{post}</React.Fragment>
}

export default Feed
