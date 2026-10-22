import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { useTranslation } from "react-i18next"
import { useForm } from "react-hook-form"
import TextField from "./TextField"
import { mail } from "../../emailConifg"
import ReCAPTCHA from "react-google-recaptcha"
import { useState } from "react"
import classNames from "classnames"
const ContacthtmlForm = () => {
  const form = useRef()
  const { t } = useTranslation()
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const recaptchaRef = React.createRef()
  const RECAPKEY = process.env.REACT_APP_DRE_RECAPTCHA_SITEKEY

  const [captchaIsDone, setCaptchaDone] = useState(false)

  const buttonClass = classNames(
    "inline-flex items-center justify-center rounded-full bg-green-800 px-7 py-3 font-moonbold text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-800 focus-visible:outline-offset-2",
    {
      "hover:bg-pop-green hover:text-green-800": captchaIsDone,
      "cursor-not-allowed opacity-60": !captchaIsDone,
    },
  )

  function handleCaptcha() {
    setCaptchaDone(true)
  }

  const onSubmit = data => {
    emailjs
      .sendForm(mail.serviceid, mail.templateid, form.current, mail.publickey)
      .then(() => {
        alert("Contactform Submitted Successfully!")
        reset()
      })
      .catch(error => {
        alert(error.message)
      })
  }

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-green-200 bg-white p-6 shadow-xl shadow-green-700/5 sm:p-10">
      <div className="mb-6">
        <p className="font-moonbold text-sm uppercase tracking-[0.18em] text-teal-300">{t("navigation.contact")}</p>
        <h2 className="mt-2 font-moon text-3xl text-green-700 sm:text-4xl">{t("contact.formTitle")}</h2>
      </div>
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="body-font relative">
          <div className="grid gap-2 sm:grid-cols-2">
            <TextField
              label="form.firstname"
              name="firstname"
              required="required"
              register={register}
              errors={errors}
            />
            <TextField label="form.lastname" name="lastname" required="required" register={register} errors={errors} />
            <TextField label="form.phone" name="phone" register={register} errors={errors} />
            <TextField label="form.email" name="email" required="required" register={register} errors={errors} />
            <div className="p-2 sm:col-span-2">
              <div className="relative">
                <label htmlFor="message" className="mb-2 block text-sm font-moonbold text-green-700">
                  {t("form.message")}
                  <span className="pl-1 text-red after:content-['*']"></span>
                </label>
                <textarea
                  name="message"
                  {...register("message", { required: true })}
                  aria-invalid={errors.message ? "true" : "false"}
                  className="min-h-44 w-full resize-y rounded-xl border border-green-200 bg-white px-4 py-3 text-base leading-6 text-grey-400 outline-none transition focus:border-pop-blue focus:ring-2 focus:ring-pop-blue/30"
                ></textarea>
                <p className="mt-2 text-sm leading-6 text-grey-400">{t("form.volunteerHint")}</p>
                {errors.message?.type === "required" && (
                  <p className="mt-2 text-sm text-red" role="alert">
                    message is required
                  </p>
                )}
              </div>
            </div>
            <div className="p-2 sm:col-span-2">
              <ReCAPTCHA ref={recaptchaRef} className="pb-4" sitekey={RECAPKEY} onChange={handleCaptcha} />
              <button type="submit" disabled={!captchaIsDone} className={buttonClass}>
                {t("form.submit")}
              </button>
            </div>
          </div>
      </form>
    </div>
  )
}

export default ContacthtmlForm
