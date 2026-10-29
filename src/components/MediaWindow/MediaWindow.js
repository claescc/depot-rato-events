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
      brand: "Facebook",
      cardStyle: "border-facebook-blue bg-facebook-blue",
      textStyle: "text-white",
      handleStyle: "text-white/80",
      actionStyle: "bg-white/15 text-white hover:bg-pop-yellow hover:text-green-900",
      iconStyle: "bg-facebook-blue text-white",
      accent: "bg-pop-yellow",
      decoration: "bg-pop-yellow",
    },
    {
      id: "instagram",
      name: t("footer.instagram"),
      handle: "@depotratoevents",
      description: t("media.instagramInfo"),
      icon: faInstagram,
      href: "https://www.instagram.com/depotratoevents/",
      brand: "Instagram",
      cardStyle: "border-pop-pink bg-gradient-to-br from-instagram-purple via-pop-pink to-[#c13584]",
      textStyle: "text-white",
      handleStyle: "text-white/85",
      actionStyle: "bg-white/20 text-white hover:bg-pop-yellow hover:text-green-900",
      iconStyle: "bg-gradient-to-br from-instagram-purple via-pop-pink to-pop-yellow text-white",
      accent: "bg-gradient-to-r from-instagram-purple via-pop-pink to-pop-yellow",
      decoration: "bg-pop-green",
    },
    {
      id: "tiktok",
      name: t("footer.tiktok"),
      handle: "@depotratoevents",
      description: t("media.tiktokInfo"),
      icon: faTiktok,
      href: "https://www.tiktok.com/@depotratoevents",
      brand: "TikTok",
      cardStyle: "border-pop-blue/70 bg-tiktok-black",
      textStyle: "text-white",
      handleStyle: "text-white/75",
      actionStyle: "bg-white/10 text-white hover:bg-pop-pink",
      iconStyle: "bg-white/10 text-pop-blue",
      accent: "bg-gradient-to-r from-pop-blue via-white to-pop-pink",
      decoration: "bg-pop-pink",
    },
    {
      id: "x",
      name: t("media.x"),
      handle: "@DepotRatoEvents",
      description: t("media.xInfo"),
      icon: faXTwitter,
      href: "https://x.com/DepotRatoEvents",
      brand: "X",
      iconStyle: "bg-green-800 text-white",
      accent: "bg-green-800",
      decoration: "bg-pop-blue",
    },
  ]

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-green-800 px-5 py-16 text-white sm:px-8 sm:py-20">
        <div aria-hidden="true" className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-pop-pink/80 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-36 left-1/3 -z-10 h-72 w-72 rounded-full bg-pop-blue/60 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 inline-flex rounded-full bg-pop-yellow px-4 py-2 font-moonbold text-xs uppercase tracking-[0.2em] text-green-800">
            {t("navigation.media")}
          </p>
          <h1 className="max-w-3xl font-moon text-4xl leading-tight sm:text-6xl">{t("media.all")}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">{t("media.allinfo")}</p>
        </div>
      </section>

      <section className="bg-green-100/30 px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-3xl">
            <p className="mb-2 font-moonbold text-xs uppercase tracking-[0.18em] text-green-500">{t("media.feed")}</p>
            <h2 className="font-moon text-2xl text-green-700 sm:text-3xl">{t("media.socialTitle")}</h2>
          <p className="mt-2 max-w-2xl leading-7 text-grey-400">{t("media.feedinfo")}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {channels.map(channel => (
              <a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("media.visitChannel")}: ${channel.name} (${channel.handle})`}
                className={`group flex min-h-72 flex-col overflow-hidden rounded-3xl border shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2 ${channel.cardStyle || "border-green-200 bg-white"}`}
              >
                <span className={`h-2 w-full ${channel.accent}`} aria-hidden="true" />
                <span className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="mb-6 flex items-center justify-between">
                    <span className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm transition-transform group-hover:rotate-3 group-hover:scale-105 ${channel.iconStyle}`}>
                      <FontAwesomeIcon icon={channel.icon} className="text-3xl" aria-hidden="true" />
                    </span>
                    <span className={`h-3 w-3 rounded-full ${channel.decoration}`} aria-hidden="true" />
                  </span>
                  <span className={`font-moon text-2xl ${channel.textStyle || "text-green-800"}`}>{channel.name}</span>
                  <span className={`mt-1 text-sm font-semibold ${channel.handleStyle || "text-grey-400"}`}>{channel.handle}</span>
                  <span className={`mt-4 flex-1 text-sm leading-6 ${channel.textStyle ? "text-white/90" : "text-grey-400"}`}>{channel.description}</span>
                  <span className={`mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-full px-4 py-2 font-moonbold text-sm transition ${channel.actionStyle || "bg-green-100/70 text-green-800 group-hover:bg-pop-yellow"}`}>
                    {t("media.visitChannel")}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default MediaWindow
