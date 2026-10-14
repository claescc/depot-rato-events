import { useTranslation } from "react-i18next"

const PreRegisterForEvent = () => {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-green-100/50 p-7 sm:p-10 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="mb-3 font-moon text-2xl text-green-700 sm:text-3xl">{t("events.preregister")}</h2>
          <p className="leading-7 text-grey-400">{t("events.preregisterinfo")}</p>
        </div>
        <a href="https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSenZPwjnwoYbeKMfCDjPCCk15o99Xb8wkIvuMfwCE3Bj-PLJw%2Fviewform&data=05%7C01%7C%7Cd8739321964c42b253f908db62cbbf89%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638212399466030987%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=8dKQjOtbJcMjrR209PGOMolBOoBgPnWPPZRZ9YCejPA%3D&reserved=0" target="_blank" rel="noreferrer">
          <span className="btn-preregister rounded-full px-7 py-3 font-moonbold shadow-md transition hover:-translate-y-0.5 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-700">
            {t("events.preregbtn")}
          </span>
        </a>
      </div>
    </section>
  )
}

export default PreRegisterForEvent

// https://forms.gle/hgPyoMY79MgyeHUT8
