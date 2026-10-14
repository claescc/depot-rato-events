import { useTranslation } from "react-i18next"

export default function Welcome() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="mb-12 grid gap-5 md:mb-16 md:grid-cols-12 md:items-end md:gap-10">
        <div className="md:col-span-5">
          <h2 className="font-moon text-3xl leading-tight text-green-700 sm:text-4xl">{t("home.dre")}</h2>
        </div>
        <p className="text-base leading-8 text-grey-400 md:col-span-7 md:text-lg">{t("home.dretxt")}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <article className="rounded-3xl border border-green-200/60 bg-green-100/40 p-7 sm:p-9">
          <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-green-700 font-moonbold text-white">
            01
          </span>
          <h3 className="mb-3 font-moon text-2xl text-green-700">{t("home.neighbourhood")}</h3>
          <p className="leading-7 text-grey-400">{t("home.neightxt")}</p>
        </article>
        <article className="rounded-3xl border border-green-200/60 bg-white p-7 shadow-lg shadow-green-700/5 sm:p-9">
          <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-300 font-moonbold text-green-800">
            02
          </span>
          <h3 className="mb-3 font-moon text-2xl text-green-700">{t("home.events")}</h3>
          <p className="leading-7 text-grey-400">{t("home.eventtxt")}</p>
        </article>
      </div>
    </section>
  )
}
