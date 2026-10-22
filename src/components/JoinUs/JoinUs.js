import { useTranslation } from "react-i18next"

export default function JoinUs() {
  const { t } = useTranslation()
  return (
    <section id="join-us" className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
      <div className="rounded-3xl border border-green-200 bg-green-100/50 p-7 sm:p-10">
        <h2 className="font-moon text-3xl leading-tight text-green-700 sm:text-4xl">{t("contact.joinus")}</h2>
        <p className="mt-4 max-w-4xl leading-7 text-grey-400">{t("contact.jointxt")}</p>
        <p className="mt-4 max-w-4xl leading-7 text-grey-400">{t("contact.volunteerTasks")}</p>
        <p className="mt-4 font-moonbold leading-7 text-green-700">{t("contact.volunteerWelcome")}</p>
      </div>
    </section>
  )
}
