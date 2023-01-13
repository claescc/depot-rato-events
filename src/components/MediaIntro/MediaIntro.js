import { useTranslation } from "react-i18next"

const MediaIntro = () => {
  const { t } = useTranslation()

  return (
    <div className="dre-container">
      <div className="dre-title">{t("media.all")}</div>
      <div className="dre-aligna">{t("media.allinfo")}</div>
    </div>
  )
}

export default MediaIntro
