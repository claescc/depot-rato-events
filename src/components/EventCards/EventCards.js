import { useTranslation } from "react-i18next"
import { getEvents } from "../UpcomingEvent/useEventToggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const EventCards = () => {
  const { t } = useTranslation()
  const eventCards = getEvents(t)

  return (
    <section id="event-ideas" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="mb-8 max-w-3xl">
        <p className="mb-2 font-moonbold text-xs uppercase tracking-[0.18em] text-teal-300">{t("calendar.ideasLabel")}</p>
        <h2 className="font-moon text-3xl leading-tight text-green-700 sm:text-4xl">{t("calendar.all")}</h2>
        <p className="mt-4 leading-7 text-grey-400">{t("calendar.allinfo")}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {eventCards.map(card => (
          <article key={card.id} className="rounded-3xl border border-green-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-pop-blue/15 text-green-700">
              <FontAwesomeIcon icon={card.icon} className="text-xl" aria-hidden="true" />
            </span>
            <h3 className="font-moon text-2xl text-green-700">{card.eventname}</h3>
            <p className="mt-3 leading-7 text-grey-400">{card.eventinformation}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EventCards
