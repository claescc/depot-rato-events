import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"
import { faFacebook, faInstagram, faTiktok, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBullhorn, faCommentDots, faHeart, faImages, faMobileScreenButton, faPlay, faStar } from "@fortawesome/free-solid-svg-icons"

const cardDetails = {
  facebook: {
    background: "bg-pop-pink",
    highlight: "bg-pop-yellow",
    iconBackground: "bg-[#1877F2]",
    decoration: faBullhorn,
    decorationBackground: "bg-pop-yellow",
    sticker: faHeart,
    stickerColor: "text-pop-green",
    starColor: "text-pop-yellow",
  },
  instagram: {
    background: "bg-pop-blue",
    highlight: "bg-pop-pink",
    iconBackground: "",
    decoration: faImages,
    decorationBackground: "bg-white",
    sticker: faHeart,
    stickerColor: "text-pop-pink",
    starColor: "text-pop-yellow",
  },
  tiktok: {
    background: "bg-pop-green",
    highlight: "bg-pop-pink",
    iconBackground: "bg-black",
    decoration: faMobileScreenButton,
    decorationBackground: "bg-black",
    sticker: faPlay,
    stickerColor: "text-pop-pink",
    starColor: "text-pop-yellow",
  },
  x: {
    background: "bg-pop-yellow",
    highlight: "bg-pop-blue",
    iconBackground: "bg-black",
    decoration: faCommentDots,
    decorationBackground: "bg-white",
    sticker: faHeart,
    stickerColor: "text-pop-pink",
    starColor: "text-pop-blue",
  },
}

const SocialIllustration = ({ id, details }) => (
  <span aria-hidden="true" className="pointer-events-none absolute bottom-6 right-5 top-6 flex w-[36%] items-center justify-center sm:right-7">
    <span className={`relative flex h-28 w-24 rotate-6 items-center justify-center rounded-2xl border-[5px] border-black p-3 shadow-[5px_5px_0_#000] sm:h-36 sm:w-28 ${details.decorationBackground}`}>
      {id === "instagram" ? (
        <span className="flex h-full w-full items-center justify-center rounded-lg border-2 border-black bg-pop-yellow">
          <FontAwesomeIcon icon={details.decoration} className="text-4xl text-black sm:text-5xl" />
        </span>
      ) : (
        <FontAwesomeIcon icon={details.decoration} className={`text-5xl sm:text-6xl ${id === "facebook" ? "text-black" : "text-pop-blue"}`} />
      )}
      {id === "tiktok" && (
        <span className="absolute inset-3 flex items-center justify-center rounded-xl bg-white">
          <FontAwesomeIcon icon={faPlay} className="ml-1 text-4xl text-pop-pink" />
        </span>
      )}
      {id === "x" && (
        <FontAwesomeIcon icon={faCommentDots} className="absolute -right-7 -top-5 text-5xl text-pop-pink drop-shadow-[2px_3px_0_#000] sm:-right-9 sm:text-6xl" />
      )}
    </span>
    <FontAwesomeIcon icon={details.sticker} className={`absolute bottom-1 right-0 rotate-12 text-4xl drop-shadow-[2px_2px_0_#000] sm:bottom-0 sm:right-1 sm:text-5xl ${details.stickerColor}`} />
    <FontAwesomeIcon icon={faStar} className={`absolute right-0 top-1 -rotate-12 text-3xl drop-shadow-[2px_2px_0_#000] sm:right-1 sm:top-0 sm:text-4xl ${details.starColor}`} />
  </span>
)

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
    },
    {
      id: "instagram",
      name: t("footer.instagram"),
      handle: "@depotratoevents",
      description: t("media.instagramInfo"),
      icon: faInstagram,
      href: "https://www.instagram.com/depotratoevents/",
    },
    {
      id: "tiktok",
      name: t("footer.tiktok"),
      handle: "@depotratoevents",
      description: t("media.tiktokInfo"),
      icon: faTiktok,
      href: "https://www.tiktok.com/@depotratoevents",
    },
    {
      id: "x",
      name: t("media.x"),
      handle: "@DepotRatoEvents",
      description: t("media.xInfo"),
      icon: faXTwitter,
      href: "https://x.com/DepotRatoEvents",
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
        <div className="grid gap-5 sm:grid-cols-2">
          {channels.map(channel => {
            const details = cardDetails[channel.id]
            return (
              <a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("media.visitChannel")}: ${channel.name} (${channel.handle})`}
                className={`group relative flex min-h-[330px] flex-col overflow-hidden rounded-3xl p-6 text-black shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 sm:min-h-[355px] sm:p-8 ${details.background}`}
              >
                <SocialIllustration id={channel.id} details={details} />
                <span className="relative z-10 flex max-w-[60%] flex-1 flex-col">
                  <span className={`mb-4 flex h-20 w-20 items-center justify-center rounded-[1.65rem] border-[5px] border-black bg-white shadow-[3px_4px_0_#000] sm:h-24 sm:w-24 ${channel.id === "instagram" ? "p-1" : ""}`}>
                    <span
                      className={`flex h-full w-full items-center justify-center rounded-[1.2rem] ${channel.id === "instagram" ? "" : details.iconBackground}`}
                      style={channel.id === "instagram" ? { background: "linear-gradient(135deg, #FDE145 0%, #FB32A2 52%, #833AB4 100%)" } : undefined}
                    >
                      <FontAwesomeIcon
                        icon={channel.icon}
                        className="text-4xl text-white sm:text-5xl"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <span className={`w-fit -rotate-2 rounded-md px-3 py-1 font-moonbold text-3xl uppercase leading-none text-white [text-shadow:2px_3px_0_#000] sm:text-4xl ${details.highlight}`}>
                    {channel.name}
                  </span>
                  <span className="mt-3 text-base font-extrabold sm:text-lg">{channel.handle}</span>
                  <span className="mt-3 max-w-[19rem] flex-1 text-sm leading-6 sm:text-base">{channel.description}</span>
                  <span className="mt-5 inline-flex items-center gap-2 font-moonbold text-sm uppercase sm:text-base">
                    {t("media.visitChannel")}
                    <span aria-hidden="true" className="text-xl transition-transform group-hover:translate-x-1">↗</span>
                  </span>
                </span>
              </a>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default MediaWindow
