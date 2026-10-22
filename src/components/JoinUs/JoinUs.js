import { useTranslation } from "react-i18next"
import joinOurTeamPoster from "../../assets/images/join-our-team-poster.png"

export default function JoinUs() {
  const { t } = useTranslation()
  return (
    <section id="join-us" aria-labelledby="join-us-title" className="border-y-4 border-pop-pink bg-pop-pink px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-12">
        <img
          src={joinOurTeamPoster}
          alt={t("home.crewPosterAlt")}
          className="w-full rounded-2xl shadow-2xl"
        />
        <div>
          <p className="mb-3 inline-flex rounded-full bg-green-800 px-4 py-2 font-moonbold text-xs uppercase tracking-[0.18em] text-white sm:text-sm">
            {t("home.crewEyebrow")}
          </p>
          <h2 id="join-us-title" className="font-moon text-3xl leading-tight text-green-800 sm:text-4xl">
            {t("contact.joinus")}
          </h2>
          <p className="mt-4 leading-7 text-green-800">{t("contact.jointxt")}</p>
          <p className="mt-4 leading-7 text-green-800">{t("contact.volunteerTasks")}</p>
          <p className="mt-4 font-moonbold leading-7 text-green-800">{t("contact.volunteerWelcome")}</p>
          <a
            href="#volunteer-contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-pop-green px-7 py-3 font-moonbold text-green-800 transition hover:bg-pop-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-800 focus-visible:outline-offset-2"
          >
            {t("home.crewAction")}
          </a>
        </div>
      </div>
    </section>
  )
}
