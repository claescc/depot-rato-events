import { useTranslation } from "react-i18next"

export default function JoinUs() {
  const { t } = useTranslation()
  return (
    <div className="dre-container">
      <div className="dre-title">{t("contact.joinus")}</div>
      <div className="dre-aligna">{t("contact.jointxt")}</div>
    </div>
  )
}
