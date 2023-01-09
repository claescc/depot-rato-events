import { useTranslation } from "react-i18next"

export default function Welcome() {
  const { t } = useTranslation()
  return (
    <div className="text-green-500 mx-auto max-w-3xl">
      <div className="p-4 pb-0">
        <div className="text-xl pb-4">{t("home.dre")}</div>
        <div className="text-justify pb-4">{t("home.dretxt")}</div>
        <div className="text-xl py-4">{t("home.neighbourhood")}</div>
        <div className="text-justify pb-4">{t("home.neightxt")}</div>
        <div className="text-xl py-4">{t("home.events")}</div>
        <div className="text-justify pb-4">{t("home.eventtxt")}</div>
      </div>
    </div>
  )
}
