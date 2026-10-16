import { CustomLink } from "../Navigation/NavBar"
import { useTranslation } from "react-i18next"

// import { useState } from "react"

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-green-800 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 py-12 sm:px-8 md:grid-cols-4 md:py-16">
        <div>
          <h2 className="mb-5 font-moonbold text-sm uppercase tracking-widest text-mint-100">{t("footer.group")}</h2>
          <ul className="space-y-3 text-sm text-white/75">
            <CustomLink to="/home" className="transition-colors hover:text-mint-100">
              {t("footer.about")}
            </CustomLink>
            <CustomLink to="/contact" className="transition-colors hover:text-mint-100">
              {t("footer.joinus")}
            </CustomLink>
          </ul>
        </div>
        <div>
          <h2 className="mb-5 font-moonbold text-sm uppercase tracking-widest text-mint-100">{t("footer.events")}</h2>
          <ul className="space-y-3 text-sm text-white/75">
            <CustomLink to="/calendar" className="transition-colors hover:text-mint-100">
              {t("footer.calendar")}
            </CustomLink>
            <CustomLink to="/media" className="transition-colors hover:text-mint-100">
              {t("footer.media")}
            </CustomLink>
          </ul>
        </div>
        <div>
          <h2 className="mb-5 font-moonbold text-sm uppercase tracking-widest text-mint-100">{t("footer.socialmedia")}</h2>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="transition-colors hover:text-mint-100">
              <a href="https://www.facebook.com/profile.php?id=100089286275731" target="_blank" rel="noreferrer">
                {t("footer.facebook")}
              </a>
            </li>
            <li className="transition-colors hover:text-mint-100">
              <a href="https://www.instagram.com/depotratoevents/" target="_blank" rel="noreferrer">
                {t("footer.instagram")}
              </a>
            </li>
            <li className="transition-colors hover:text-mint-100">
              <a href="https://www.tiktok.com/@depotratoevents" target="_blank" rel="noreferrer">
                {t("footer.tiktok")}
              </a>
            </li>
            <li className="transition-colors hover:text-mint-100">
              <a href="https://x.com/DepotRatoEvents" target="_blank" rel="noreferrer">
                {t("footer.twitter")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-5 font-moonbold text-sm uppercase tracking-widest text-mint-100">{t("footer.legal")}</h2>
          <ul className="space-y-3 text-sm text-white/75">
            <CustomLink to="/legal" className="transition-colors hover:text-mint-100">
              {t("footer.privacypolicy")}
            </CustomLink>
            <CustomLink to="/contact" className="transition-colors hover:text-mint-100">
              {t("footer.contact")}
            </CustomLink>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/60">
        {t("footer.claescc")}
      </div>
    </footer>
  )
}
