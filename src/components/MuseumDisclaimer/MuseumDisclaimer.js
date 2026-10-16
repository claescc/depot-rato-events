import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLandmark } from "@fortawesome/free-solid-svg-icons"

export default function MuseumDisclaimer() {
  const { t } = useTranslation()

  return (
    <aside aria-labelledby="museum-notice-title" className="border-b border-green-300 bg-green-200">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-5 px-5 py-5 sm:px-8 md:flex-row md:items-center md:gap-6 md:py-6">
        <FontAwesomeIcon
          icon={faLandmark}
          className="hidden h-8 w-8 shrink-0 text-green-700 sm:block"
          aria-hidden="true"
        />
        <div className="flex-1">
          <h2 id="museum-notice-title" className="font-moonbold text-lg text-green-700 sm:text-xl">
            {t("disclaimer.museum")}
          </h2>
          <p className="mt-1 text-sm leading-6 text-grey-400 sm:text-base">{t("disclaimer.museumtxt")}</p>
        </div>
        <a
          href="https://www.mechelen.be/depot-rato"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-green-700 px-6 py-3 text-center font-moonbold text-white transition hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2 sm:w-auto"
        >
          {t("disclaimer.museumlink")}
        </a>
      </div>
    </aside>
  )
}