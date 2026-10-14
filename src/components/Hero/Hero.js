// import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section className="relative isolate overflow-hidden bg-green-700 bg-homehero bg-cover bg-center text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-800/95 via-green-700/75 to-green-700/25" />
      <div className="mx-auto flex min-h-[32rem] max-w-7xl items-center px-5 py-20 sm:px-8 md:min-h-[38rem]">
        <div className="max-w-3xl">
          <p className="mb-5 font-moonbold text-sm uppercase tracking-[0.25em] text-mint-100 sm:text-base">
            {t("hero.dre")}
          </p>
          <h1 className="max-w-2xl font-moon text-4xl uppercase leading-tight tracking-wide sm:text-6xl lg:text-7xl">
            {t("hero.dreline")}
          </h1>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/calendar"
              className="inline-flex items-center justify-center rounded-full bg-mint-400 px-7 py-3 font-moonbold text-green-800 transition hover:bg-mint-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              {t("navigation.calendar")}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3 font-moonbold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              {t("navigation.contact")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
