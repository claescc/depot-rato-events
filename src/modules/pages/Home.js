import Hero from "../../components/Hero/Hero"
import PreRegisterForEvent from "../../components/PreRegisterForEvent/PreRegisterForEvent"
import UpcomingEvent from "../../components/UpcomingEvent/UpcomingEvent"
import Welcome from "../../components/Welcome/Welcome"
import MuseumDisclaimer from "../../components/MuseumDisclaimer/MuseumDisclaimer"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <MuseumDisclaimer />
      <Hero />
      <section aria-labelledby="volunteer-callout-title" className="border-y-4 border-fuschia-600 bg-fuschia-500 px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex rounded-full bg-green-800 px-4 py-2 font-moonbold text-xs uppercase tracking-[0.18em] text-white sm:text-sm">
              {t("home.crewEyebrow")}
            </p>
            <h2 id="volunteer-callout-title" className="font-moon text-3xl leading-tight text-green-800 sm:text-4xl">
              {t("home.crewTitle")}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-green-800 sm:text-lg">{t("home.crewInfo")}</p>
            <p className="mt-3 font-moonbold leading-7 text-green-800">{t("home.crewReassurance")}</p>
          </div>
          <Link
            to="/contact#volunteer-contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-green-800 px-7 py-3 font-moonbold text-white transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-800 focus-visible:outline-offset-2"
          >
            {t("home.crewAction")}
          </Link>
        </div>
      </section>
      <Welcome />
      <UpcomingEvent />
      <PreRegisterForEvent />
    </>
  )
}
