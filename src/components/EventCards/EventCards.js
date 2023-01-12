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

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify gap-8 pt-4">
        {eventCards.map(card => {
          return (
            <div key={card.id} className="w-80 flex flex-col flex-auto bg-green-500 text-white">
              <img className="scale-100  h-56" src={card.urlpath} alt={card.customMetadata.eventname}></img>
              <div className="grid grid-cols-8 py-4 gap-4">
                <div className="col-start-1 col-end-2 justify-self-center">
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div className="col-start-2 col-end-8">{card.customMetadata.eventname}</div>
                <div className="col-start-1 col-end-2 justify-self-center">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="col-start-2 col-end-8">{card.customMetadata.eventdate}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EventCards
