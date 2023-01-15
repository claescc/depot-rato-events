import { useTranslation } from "react-i18next"
import { useEffect, useState, useMemo } from "react"
import { ref, getStorage } from "firebase/storage"
import { fetchStorage } from "../../api/fetchStorage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons"

const EventCards = () => {
  const { t } = useTranslation()
  const [eventCards, setEventCards] = useState([])
  const storage = getStorage()
  const imageListRef = useMemo(() => ref(storage, "event-images/"), [storage])

  useEffect(() => {
    const fetch = async () => {
      const imageListItems = await fetchStorage(imageListRef, { withMeta: true })
      setEventCards(imageListItems)
    }

    fetch()
  }, [imageListRef])

  return (
    <div className="dre-container ">
      <div className="dre-title">{t("calendar.all")}</div>
      <div className="dre-aligna">{t("calendar.allinfo")}</div>

      <div className="dre-cards-container">
        {eventCards.map(card => {
          return (
            <div key={card.id} className="dre-card-wrapper">
              <img className="dre-card-img" src={card.urlpath} alt={card.customMetadata.eventname}></img>
              <div className="dre-card-data-wrapper">
                <div className="dre-card-icon">
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div className="dre-card-info">{card.customMetadata.eventname}</div>
                <div className="dre-card-icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="dre-card-info">{card.customMetadata.eventdate}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EventCards
