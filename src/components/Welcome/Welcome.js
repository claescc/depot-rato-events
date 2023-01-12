import { useTranslation } from "react-i18next"

export default function Welcome() {
  const { t } = useTranslation()
  return (
    <>
      <div className="dre-container">
        <div className="dre-title">{t("home.dre")}</div>
        <div className="dre-aligna">{t("home.dretxt")}</div>
      </div>
      <div className="dre-container">
        <div className="dre-title">{t("home.neighbourhood")}</div>
        <div className="dre-aligna">{t("home.neightxt")}</div>
      </div>
      <div className="dre-container">
        <div className="dre-title">{t("home.events")}</div>
        <div className="dre-aligna">{t("home.eventtxt")}</div>
      </div>
    </>
  )
}
