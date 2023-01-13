import { CustomLink } from "../Navigation/NavBar"
import { useTranslation } from "react-i18next"

// import { useState } from "react"

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-green-700 text-white ">
      <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">{t("footer.group")}</h2>
          <ul className="text-sm font-light">
            <CustomLink to="/home" className="block pb-2">
              {t("footer.about")}
            </CustomLink>
            <CustomLink to="/" className="block pb-2">
              {t("footer.joinus")}
            </CustomLink>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">{t("footer.events")}</h2>
          <ul className="text-sm font-light">
            <CustomLink to="/calendar" className="block pb-2">
              {t("footer.calendar")}
            </CustomLink>
            <CustomLink to="/media" className="block pb-2">
              {t("footer.media")}
            </CustomLink>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">{t("footer.socialmedia")}</h2>
          <ul className="text-sm font-light">
            <li className="text-white hover:text-mint-200 block pb-2">
              <a href="https://www.facebook.com/groups/depotratodurabrikcommunity" target="_blank" rel="noreferrer">
                {t("footer.facebook")}
              </a>
            </li>
            <li className="text-white hover:text-mint-200 block pb-2">
              <a href="https://www.instagram.com/depotratoevents/" target="_blank" rel="noreferrer">
                {t("footer.instagram")}
              </a>
            </li>

            <CustomLink to="/contact" className=" block pb-2">
              {t("footer.contact")}
            </CustomLink>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">{t("footer.legal")}</h2>
          <ul className="text-sm font-light">
            <CustomLink to="/" className="block pb-2">
              {t("footer.privacypolicy")}
            </CustomLink>

            <CustomLink to="/" className="block pb-2">
              {t("footer.termsandconditions")}
            </CustomLink>
          </ul>
        </div>
      </div>
      <div className="bg-green-800 py-4 px-4 flex justify-center ">
        <span className="text-xs text-center">{t("footer.claescc")}</span>
      </div>
    </footer>
  )
}
