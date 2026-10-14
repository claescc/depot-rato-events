import { useTranslation } from "react-i18next"
import { useEventToggle } from "./useEventToggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocation, faClock, faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import TableRowIconText from "../TableRowIconText/TableRowIconText"

const UpcomingEvent = () => {
  const { t } = useTranslation()
  const toggleEventHomePage = useEventToggle()

  return (
    <section className="bg-green-700 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-3 font-moonbold text-sm uppercase tracking-[0.2em] text-mint-100">{t("home.events")}</p>
        <h2 className="mb-9 font-moon text-3xl uppercase sm:mb-12 sm:text-4xl">{t("events.upcoming")}</h2>
        <article className="grid overflow-hidden rounded-3xl bg-white text-green-700 shadow-2xl md:grid-cols-2">
          <div className="flex h-64 flex-col items-center justify-center gap-5 bg-green-100 p-8 text-center md:min-h-[24rem]">
            <FontAwesomeIcon icon={toggleEventHomePage.icon} className="text-7xl text-green-500 sm:text-8xl" aria-hidden="true" />
            <span className="font-moon text-xl uppercase tracking-widest text-green-700 sm:text-2xl">{t("home.dre")}</span>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <h3 className="mb-6 font-moon text-2xl sm:text-3xl">{toggleEventHomePage.eventname}</h3>
            <div className="space-y-5 leading-7 text-grey-400">
              <TableRowIconText icon={faClock} text={toggleEventHomePage.eventdate} />
              <TableRowIconText icon={faLocation} text={toggleEventHomePage.eventlocation} />
              <TableRowIconText icon={faCircleInfo} text={toggleEventHomePage.eventinformation} />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default UpcomingEvent
