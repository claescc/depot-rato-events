import { useState, useEffect } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import Feed from "./Feed"

const InstagramFeature = ({ ...props }) => {
  const [feeds, setFeedsData] = useState([])

  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController()

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${props.token}`,
          )
          .then(resp => {
            setFeedsData(resp.data.data)
          })
      } catch (err) {
        console.log("error", err)
      }
    }

    // manually call the fecth function
    fetchInstagramPost()

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort()
    }
  }, [props.limit, props.token])

  return (
    <div className="dre-media-container">
      <div className="dre-media-banner bg-blue-500 ">
        <div className="dre-media-header">
          <div className="font-monda">
            <a href="https://www.instagram.com/depotratoevents/" target="_blank" rel="noreferrer">
              @depotratoevents
            </a>
          </div>
          <FontAwesomeIcon className="h-8" icon={faInstagram} />
        </div>
      </div>
      <div className="dre-media-feed bg-blue-500">
        {feeds.map(feed => (
          <Feed key={feed.id} feed={feed} />
        ))}
      </div>
    </div>
  )
}

export default InstagramFeature
