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

  const buttonClass = classNames("btn-primary", {
    "hover:text-green-500  hover:bg-mint-200": captchaIsDone,
    "disabled:opacity-75 cursor-not-allowed": !captchaIsDone,
  })

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
    <form ref={form} onSubmit={handleSubmit(onSubmit)} className="body-font relative">
      <div className="container px-5 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
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
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-green-500">
                  {t("form.message")}
                  <span className="text-red pl-1 after:content-['*']"></span>
                </label>
                <textarea
                  name="message"
                  {...register("message", { required: true })}
                  aria-invalid={errors.message ? "true" : "false"}
                  className="form-textarea"
                ></textarea>
                {errors.message?.type === "required" && (
                  <p className="text-red" role="alert">
                    message is required
                  </p>
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <ReCAPTCHA ref={recaptchaRef} className="pb-4" sitekey={RECAPKEY} onChange={handleCaptcha} />
              <button type="submit" disabled={!captchaIsDone} onSubmit={handleSubmit} className={buttonClass}>
                {t("form.submit")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContacthtmlForm
