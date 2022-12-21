import { useTranslation } from "react-i18next"

export default function ContactIntro() {
  const { t } = useTranslation()
  return (
    <div className="text-green-500 flex justify-center pt-10 mx-auto max-w-3xl">
      <div className="px-4">
        <div className="text-xl pb-4">{t("contact.us")}</div>
        <div className="text-justify">
        {t("contact.infotxt")}
        </div>
        {/* <ul className="pb-4">
          <li>X: Frans Stormstraat, 2812 Muizen</li>
          <li>X: depotratoevents@gmail.com</li>
          <li>X: +32473417071</li>
          <li>FB: Depot Rato & Durabrik Community</li>
        </ul>
     */}
      </div>
    </div>
  )
}
