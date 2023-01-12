import { useTranslation } from "react-i18next"

const CalendarIntro = () => {
  const { t } = useTranslation()

  return (
    <div className="dre-container">
      <div className="dre-title">{t("home.events")}</div>
      <div className="dre-aligna">{t("home.eventtxt")}</div>
    </div>
  )
}

export default CalendarIntro
