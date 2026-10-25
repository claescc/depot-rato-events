// import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section className="relative isolate overflow-hidden bg-green-700 bg-homehero bg-cover bg-center text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-800/95 via-green-800/75 to-green-800/20" />
      <div className="mx-auto flex min-h-[30rem] max-w-7xl items-center px-5 py-16 sm:px-8 sm:py-24 md:min-h-[38rem]">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex rounded-full bg-pop-yellow px-4 py-2 font-moonbold text-xs uppercase tracking-[0.2em] text-green-800 sm:text-sm">
            {t("hero.dre")}
          </p>
          <h1 className="max-w-2xl font-moon text-4xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {t("hero.dreline")}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{t("hero.intro")}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              to="/calendar"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-pop-green px-7 py-3 font-moonbold text-green-800 transition hover:bg-pop-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              {t("navigation.calendar")}
            </Link>
            <Link
              to="/contact#volunteer-contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 bg-green-800/30 px-7 py-3 font-moonbold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              {t("home.crewAction")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
