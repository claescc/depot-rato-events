import { useTranslation } from "react-i18next"
import { useEffect, useState, useMemo } from "react"
import { ref, getStorage } from "firebase/storage"
import { fetchStorage } from "../../api/fetchStorage"

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
    <div className="text-green-500 mx-auto max-w-3xl">
      <div className="p-4 pb-0">
        <div className="text-xl py-4">{t("calendar.all")}</div>
        <div className="text-justify pb-4">{t("calendar.allinfo")}</div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify`">
          {eventCards.map(card => {
            return (
              <div key={card.id} className="m-4 w-80  flex border flex-col">
                <img className="scale-100  h-56" src={card.urlpath} alt={card.name}></img>
                <div className="pt-4">{card.event}</div>
                <div className="pt-4">{card.date}</div>
                <div className="pt-4">Gallery link </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EventCards
