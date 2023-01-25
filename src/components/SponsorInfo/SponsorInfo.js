import { useTranslation } from "react-i18next"

const SponsorInfo = () => {
  const { t } = useTranslation()

  return (
    <div className="dre-container">
      <div className="dre-title">{t("sponsorship.title")}</div>
      <div className="dre-aligna">{t("sponsorship.info")}</div>
    </div>
  )
}

export default SponsorInfo
