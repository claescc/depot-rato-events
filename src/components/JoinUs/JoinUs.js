import { useTranslation } from "react-i18next"

export default function JoinUs() {
  const { t } = useTranslation()
  return (
    <div className="text-green-500 flex justify-center mx-auto max-w-3xl">
      <div className="p-4">
        <div className="text-xl py-4">{t("contact.joinus")}</div>
        <div className="text-justify">{t("contact.jointxt")}</div>
      </div>
    </div>
  )
}
