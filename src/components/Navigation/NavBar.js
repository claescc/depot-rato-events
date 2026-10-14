import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import LanguageSelect from "../LanguageSelect/LanguageSelect"

export default function NavBar() {
  const { t } = useTranslation()
  const [navbar, setNavbar] = useState(false)
  return (
    <nav className="relative z-20 w-full border-b border-white/10 bg-green-700 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-5 py-3 sm:px-8 md:flex-nowrap md:py-4">
        <div className="w-full md:w-auto">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/home" aria-label={t("home.dre")} className="bg-drelogo block h-11 w-32 bg-contain bg-left bg-no-repeat">
              <span className="sr-only">{t("home.dre")}</span>
            </Link>

            <div className="md:hidden">
              <button
                type="button"
                className="rounded-lg p-2 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint-100"
                aria-label="Toggle navigation"
                aria-expanded={navbar}
                aria-controls="primary-navigation"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div
            id="primary-navigation"
            className={`w-full pt-5 md:w-auto md:pt-0 ${navbar ? "block" : "hidden"} md:block`}
          >
            <ul className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
              <CustomLink to="/home" className="text-base">
                {t("navigation.home")}
              </CustomLink>
              <CustomLink to="/calendar" className="text-base">
                {t("navigation.calendar")}
              </CustomLink>
              <CustomLink to="/media" className="text-base">
                {t("navigation.media")}
              </CustomLink>
              <CustomLink to="/contact" className="text-base">
                {t("navigation.contact")}
              </CustomLink>
              <li className="md:pl-2">
                <LanguageSelect />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  // get all current classes out of props and create concat of all classes
  const navClass = "text-white/80 transition-colors hover:text-white " + props.className
  const navClassActive = "active text-mint-100 transition-colors hover:text-white " + props.className

  return (
    <li className={isActive ? navClassActive : navClass}>
      <Link to={to} onClick={props.onClick}>{children}</Link>
    </li>
  )
}
