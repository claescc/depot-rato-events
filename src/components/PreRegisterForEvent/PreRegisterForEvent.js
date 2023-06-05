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
        <a href="https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSenZPwjnwoYbeKMfCDjPCCk15o99Xb8wkIvuMfwCE3Bj-PLJw%2Fviewform&data=05%7C01%7C%7Cd8739321964c42b253f908db62cbbf89%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638212399466030987%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=8dKQjOtbJcMjrR209PGOMolBOoBgPnWPPZRZ9YCejPA%3D&reserved=0" target="_blank" rel="noreferrer">
          <button className="btn-preregister">{t("events.preregbtn")}</button>
        </a>
      </div>
    </div>
  )
}

export default PreRegisterForEvent

// https://forms.gle/hgPyoMY79MgyeHUT8
