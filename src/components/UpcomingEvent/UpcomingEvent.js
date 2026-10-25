import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const UpcomingEvent = () => {
  const { t } = useTranslation()

  return (
    <section aria-labelledby="upcoming-events-title" className="bg-green-100/40 px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <article className="flex flex-col gap-6 rounded-3xl border border-green-200 bg-white p-6 shadow-lg shadow-green-700/5 sm:flex-row sm:items-center sm:p-9">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-pop-yellow text-green-800">
            <FontAwesomeIcon icon={faCalendarDays} className="text-2xl" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <p className="mb-2 font-moonbold text-xs uppercase tracking-[0.18em] text-green-500">{t("home.events")}</p>
            <h2 id="upcoming-events-title" className="font-moon text-2xl text-green-700 sm:text-3xl">
              {t("events.noUpcomingTitle")}
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-grey-400">{t("events.noUpcomingInfo")}</p>
          </div>
          <Link
            to="/contact#volunteer-contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-pop-green px-6 py-3 text-center font-moonbold text-green-800 transition hover:bg-pop-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2"
          >
            {t("home.crewAction")}
          </Link>
        </article>
      </div>
    </section>
  )
}

export default UpcomingEvent
