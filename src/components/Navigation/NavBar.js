import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import LanguageSelect from "../LanguageSelect/LanguageSelect"


export default function NavBar() {
  const { t } = useTranslation()
  const [navbar, setNavbar] = useState(false)
  return (
    <nav className="w-full  bg-green-500 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/home" className="bg-drelogo bg-center block bg-cover">
              <div className="h-10 w-28">&nbsp;</div>
            </a>

            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
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
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <CustomLink to="/home" className="text-lg ">
                {t("navigation.home")}
              </CustomLink>
              <CustomLink to="/calendar" className="text-lg ">
              {t("navigation.calendar")}
              </CustomLink>
              <CustomLink to="/gallery" className="text-lg ">
              {t("navigation.gallery")}
              </CustomLink>
              <CustomLink to="/contact" className="text-lg ">
              {t("navigation.contact")}
              </CustomLink>
              <LanguageSelect />
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
  const navClass = "text-white hover:text-mint-200 " + props.className
  const navClassActive = "active text-mint-100 hover:text-mint-200 " + props.className

  return (
    <li className={isActive ? navClassActive : navClass}>
      <Link to={to}>{children}</Link>
    </li>
  )
}
