import { useTranslation } from "react-i18next"


const CalendarIntro = () => {
  const { t } = useTranslation()

  return (
    <div className="text-green-500 mx-auto max-w-3xl">
      <div className="p-4 pb-0">
        <div className="text-xl py-4">{t("home.events")}</div>
        <div className="text-justify pb-4">{t("home.eventtxt")}</div>
      </div>
    </div>
  )
}

export default CalendarIntro
