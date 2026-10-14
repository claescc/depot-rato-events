import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faCircleInfo, faLocation } from "@fortawesome/free-solid-svg-icons"
import { getEvents } from "../UpcomingEvent/useEventToggle"

const EventCards = () => {
  const { t } = useTranslation()
  const eventCards = getEvents(t)

  return (
    <div className="dre-container ">
      <div className="dre-title">{t("calendar.all")}</div>
      <div className="dre-aligna">{t("calendar.allinfo")}</div>

      <div className="dre-cards-container">
        {eventCards.map(card => (
          <article key={card.id} className="overflow-hidden rounded-2xl bg-white text-green-700 shadow-lg">
            <div className="flex min-h-36 flex-col items-center justify-center gap-3 bg-green-100 p-6 text-center">
              <FontAwesomeIcon icon={card.icon} className="text-4xl text-green-500" aria-hidden="true" />
              <h2 className="font-moon text-2xl">{card.eventname}</h2>
            </div>
            <div className="space-y-4 p-5 text-grey-400">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCalendar} className="mt-1 text-green-500" aria-hidden="true" />
                <span>{card.eventdate}</span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faLocation} className="mt-1 text-green-500" aria-hidden="true" />
                <span>{card.eventlocation}</span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCircleInfo} className="mt-1 text-green-500" aria-hidden="true" />
                <span>{card.eventinformation}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default EventCards
