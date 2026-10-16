import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"
import { faFacebook, faInstagram, faTiktok, faXTwitter } from "@fortawesome/free-brands-svg-icons"

const MediaWindow = () => {
  const { t } = useTranslation()
  const channels = [
    {
      id: "facebook",
      name: t("footer.facebook"),
      handle: "Depot Rato Events",
      description: t("media.facebookInfo"),
      icon: faFacebook,
      href: "https://www.facebook.com/profile.php?id=100089286275731",
      accent: "bg-blue-500",
    },
    {
      id: "instagram",
      name: t("footer.instagram"),
      handle: "@depotratoevents",
      description: t("media.instagramInfo"),
      icon: faInstagram,
      href: "https://www.instagram.com/depotratoevents/",
      accent: "bg-roze-500",
    },
    {
      id: "tiktok",
      name: t("footer.tiktok"),
      handle: "@depotratoevents",
      description: t("media.tiktokInfo"),
      icon: faTiktok,
      href: "https://www.tiktok.com/@depotratoevents",
      accent: "bg-green-500",
    },
    {
      id: "x",
      name: t("media.x"),
      handle: "@DepotRatoEvents",
      description: t("media.xInfo"),
      icon: faXTwitter,
      href: "https://x.com/DepotRatoEvents",
      accent: "bg-green-800",
    },
  ]

  return (
    <main>
      <section className="bg-green-700 px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-moonbold text-sm uppercase tracking-[0.2em] text-mint-100">{t("navigation.media")}</p>
          <h1 className="max-w-3xl font-moon text-4xl uppercase leading-tight sm:text-6xl">{t("media.all")}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">{t("media.allinfo")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-8">
          <h2 className="font-moon text-2xl text-green-700 sm:text-3xl">{t("media.feed")}</h2>
          <p className="mt-2 max-w-2xl leading-7 text-grey-400">{t("media.feedinfo")}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(channel => (
            <a
              key={channel.id}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-64 flex-col rounded-3xl border border-green-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-700"
            >
              <span className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white ${channel.accent}`}>
                <FontAwesomeIcon icon={channel.icon} className="text-2xl" aria-hidden="true" />
              </span>
              <span className="font-moon text-2xl text-green-700">{channel.name}</span>
              <span className="mt-1 text-sm font-semibold text-teal-300">{channel.handle}</span>
              <span className="mt-4 flex-1 text-sm leading-6 text-grey-400">{channel.description}</span>
              <span className="mt-5 font-moonbold text-sm text-green-700 transition group-hover:text-teal-300">
                {t("media.visitChannel")} <span aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default MediaWindow
