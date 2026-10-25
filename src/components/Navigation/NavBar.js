import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import LanguageSelect from "../LanguageSelect/LanguageSelect"

export default function NavBar() {
  const { t } = useTranslation()
  const [navbar, setNavbar] = useState(false)

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-green-800 text-white shadow-lg shadow-green-800/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          to="/home"
          aria-label={t("home.dre")}
          className="bg-drelogo block h-11 w-32 shrink-0 bg-contain bg-left bg-no-repeat focus-visible:outline focus-visible:outline-2 focus-visible:outline-pop-yellow"
          onClick={() => setNavbar(false)}
        >
          <span className="sr-only">{t("home.dre")}</span>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pop-yellow md:hidden"
          aria-label={t(navbar ? "navigation.closeMenu" : "navigation.openMenu")}
          aria-expanded={navbar}
          aria-controls="primary-navigation"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div
          id="primary-navigation"
          className={`${navbar ? "block" : "hidden"} absolute inset-x-0 top-full border-b border-white/10 bg-green-800 px-5 pb-5 shadow-xl md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:gap-2">
            <CustomLink to="/home" onClick={() => setNavbar(false)}>{t("navigation.home")}</CustomLink>
            <CustomLink to="/calendar" onClick={() => setNavbar(false)}>{t("navigation.calendar")}</CustomLink>
            <CustomLink to="/media" onClick={() => setNavbar(false)}>{t("navigation.media")}</CustomLink>
            <CustomLink to="/contact" onClick={() => setNavbar(false)}>{t("navigation.contact")}</CustomLink>
            <li className="pt-2 md:pl-2 md:pt-0">
              <label className="sr-only" htmlFor="languages">{t("languages.language")}</label>
              <LanguageSelect />
            </li>
            <li className="pt-2 md:pl-2 md:pt-0">
              <Link
                to="/contact#volunteer-contact"
                onClick={() => setNavbar(false)}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-pop-green px-5 py-2 font-moonbold text-sm text-green-800 transition hover:bg-pop-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:w-auto"
              >
                {t("home.crewAction")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li>
      <Link
        to={to}
        onClick={props.onClick}
        aria-current={isActive ? "page" : undefined}
        className={`inline-flex min-h-11 items-center rounded-xl px-4 py-2 text-sm font-moonbold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-pop-yellow ${
          isActive ? "bg-white/10 text-pop-green" : "text-white/80 hover:bg-white/10 hover:text-white"
        } ${props.className || ""}`}
      >
        {children}
      </Link>
    </li>
  )
}
