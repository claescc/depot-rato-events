import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faInstagram, faFacebook, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons"

const MediaWindow = () => {
  return (
    <div className="dre-media-grid">
      <div className="dre-media-grid-item bg-berry-500">
        <FontAwesomeIcon className="dre-media-item-icon" icon={faFacebook} />
        <div className="dre-media-item-link">
          <a href="https://www.facebook.com/profile.php?id=100089286275731" target="_blank" rel="noreferrer">
            Depot Rato Events
          </a>
        </div>
      </div>
      <div className="dre-media-grid-item bg-blue-500">
        <FontAwesomeIcon className="dre-media-item-icon" icon={faInstagram} />
        <div className="dre-media-item-link font-monda">
          <a href="https://www.instagram.com/depotratoevents/" target="_blank" rel="noreferrer">
            @depotratoevents
          </a>
        </div>
      </div>
      <div className="dre-media-grid-item bg-teal-300">
        <FontAwesomeIcon className="dre-media-item-icon" icon={faTiktok} />
        <div className="dre-media-item-link font-jost tracking-wider">
          <a href="https://www.tiktok.com/@depotratoevents" target="_blank" rel="noreferrer">
            depotratoevents
          </a>
        </div>
      </div>
      <div className="dre-media-grid-item bg-purple-300">
        <FontAwesomeIcon className="dre-media-item-icon" icon={faTwitter} />
        <div className="dre-media-item-link font-opensans">
          <a href="https://twitter.com/DepotRatoEvents" target="_blank" rel="noreferrer">
            @DepotRatoEvents
          </a>
        </div>
      </div>
    </div>
  )
}

export default MediaWindow
