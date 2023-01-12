import { useTranslation } from "react-i18next"

export default function ContactIntro() {
  const { t } = useTranslation()
  return (
    <div className="dre-container">
      <div className="dre-title">{t("contact.us")}</div>
      <div className="dre-aligna">{t("contact.infotxt")}</div>
    </div>
  )
}
