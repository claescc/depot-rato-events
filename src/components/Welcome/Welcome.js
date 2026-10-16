import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import depotRender from "../../assets/images/neighborhood-depot-render.jpg"
import neighborhoodAerial from "../../assets/images/neighborhood-aerial.jpg"
import neighborhoodOverview from "../../assets/images/neighborhood-overview.jpg"

export default function Welcome() {
  const { t } = useTranslation()
  const neighborhoodPhotos = [
    {
      src: depotRender,
      alt: t("home.photoRenderAlt"),
      caption: t("home.photoRenderCaption"),
    },
    {
      src: neighborhoodAerial,
      alt: t("home.photoAerialAlt"),
      caption: t("home.photoAerialCaption"),
    },
    {
      src: neighborhoodOverview,
      alt: t("home.photoOverviewAlt"),
      caption: t("home.photoOverviewCaption"),
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="mb-12 grid gap-5 md:mb-16 md:grid-cols-12 md:items-end md:gap-10">
        <div className="md:col-span-5">
          <h2 className="font-moon text-3xl leading-tight text-green-700 sm:text-4xl">{t("home.dre")}</h2>
        </div>
        <p className="text-base leading-8 text-grey-400 md:col-span-7 md:text-lg">{t("home.dretxt")}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <article className="rounded-3xl border border-green-200/60 bg-green-100/40 p-7 sm:p-9">
          <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-green-700 font-moonbold text-white">
            01
          </span>
          <h3 className="mb-3 font-moon text-2xl text-green-700">{t("home.neighbourhood")}</h3>
          <p className="leading-7 text-grey-400">{t("home.neightxt")}</p>
        </article>
        <article className="rounded-3xl border border-green-200/60 bg-white p-7 shadow-lg shadow-green-700/5 sm:p-9">
          <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-300 font-moonbold text-green-800">
            02
          </span>
          <h3 className="mb-3 font-moon text-2xl text-green-700">{t("home.events")}</h3>
          <p className="leading-7 text-grey-400">{t("home.eventtxt")}</p>
        </article>
      </div>

      <aside className="mt-8 rounded-3xl bg-green-700 p-7 text-white sm:p-9">
        <h3 className="font-moon text-2xl sm:text-3xl">{t("home.communityTitle")}</h3>
        <p className="mt-3 max-w-3xl leading-7 text-white/80">{t("home.communityInfo")}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://www.facebook.com/groups/depotratodurabrikcommunity/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-moonbold text-green-800 transition hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
            {t("home.facebookGroup")}
          </a>
          <a
            href="https://chat.whatsapp.com/GpCnF3fBEQQJkSKn5bg8wb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-teal-300 px-6 py-3 font-moonbold text-green-800 transition hover:bg-mint-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
            {t("home.whatsappGroup")}
          </a>
        </div>
      </aside>

      <div className="mt-14 sm:mt-20">
        <h3 className="mb-6 font-moon text-2xl text-green-700 sm:text-3xl">{t("home.neighbourhood")}</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {neighborhoodPhotos.map(photo => (
            <figure key={photo.src} className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-green-700/10">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-sm leading-6 text-grey-400">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
