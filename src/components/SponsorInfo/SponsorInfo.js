import { useTranslation } from "react-i18next"

const SponsorInfo = () => {
  const { t } = useTranslation()

  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl rounded-3xl bg-green-700 p-7 text-white sm:p-10">
        <h2 className="font-moon text-2xl sm:text-3xl">{t("sponsorship.title")}</h2>
        <p className="mt-3 max-w-4xl leading-7 text-white/80">{t("sponsorship.info")}</p>
      </div>
    </section>
  )
}

export default SponsorInfo
