// import React from "react"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation()
  return (
    <div className="w-full flex justify-center bg-homehero bg-center bg-cover">
      <div className="text-2xl py-16 sm:text-4xl text-center font-light text-white tracking-widest h-64">
        <div className="p-4 uppercase">{t("hero.dre")}</div>
        <hr></hr>
        <div className="p-4 uppercase">{t("hero.dreline")}</div>
      </div>
    </div>
  )
}
