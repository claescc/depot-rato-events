import { useTranslation } from "react-i18next"
import ComponentSpacer from "../ComponentSpacer/ComponentSpacer"

const PreRegisterForEvent = () => {
  const { t } = useTranslation()

  return (
    <div className="dre-container">
      <div className="dre-title text-center">{t("events.preregister")}</div>
      <div className="dre-aligna text-center">{t("events.preregisterinfo")}</div>
      <ComponentSpacer />
      <div>
        <a href="https://forms.gle/hgPyoMY79MgyeHUT8" target="_blank" rel="noreferrer">
          <button className="btn-preregister">{t("events.preregbtn")}</button>
        </a>
      </div>
    </div>
  )
}

export default PreRegisterForEvent

// https://forms.gle/hgPyoMY79MgyeHUT8
