import { useTranslation } from "react-i18next"

const CalendarIntro = () => {
  const { t } = useTranslation()

  return (
    <header className="bg-green-700 px-5 py-14 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-moonbold text-sm uppercase tracking-[0.2em] text-pop-green">{t("navigation.calendar")}</p>
        <h1 className="max-w-3xl font-moon text-4xl leading-tight sm:text-6xl">{t("calendar.pageTitle")}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">{t("calendar.pageInfo")}</p>
      </div>
    </header>
  )
}

export default CalendarIntro
