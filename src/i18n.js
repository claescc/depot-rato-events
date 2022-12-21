import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import HttpApi from "i18next-http-backend"

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: "eng",
    debug: false,
    fallbackLng: "eng",
    appendNamespaceToCIMode: true, //prefixes the namespace to the returned key when using lng: 'cimode'
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", //default path
    },
  })

export default i18n
