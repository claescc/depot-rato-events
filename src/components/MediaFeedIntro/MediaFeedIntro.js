import { useTranslation } from "react-i18next"

const MediaFeedIntro = () => {
  const { t } = useTranslation()

  return (
    <div className="dre-container">
      <div className="dre-title">{t("media.feed")}</div>
      <div className="dre-aligna">{t("media.feedinfo")}</div>
    </div>
  )
}

export default MediaFeedIntro
