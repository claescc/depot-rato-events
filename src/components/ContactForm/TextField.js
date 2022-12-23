import { useTranslation } from "react-i18next"

export default function TextField({ label, name, required, register, errors }) {
  const { t } = useTranslation()

  return (
    <div className="p-2 w-full sm:w-1/2">
      <div className="relative">
        <label htmlFor={name} className="leading-7 text-sm text-green-500">
          {t(label)}
          {required === "required" ? <span className="text-red pl-1 after:content-['*']"></span> : <span></span>}
        </label>
        <input
          {...register(name, { required })}
          aria-invalid={errors[name] ? "true" : "false"}
          className="w-full rounded border border-green-500 focus:border-mint-200 text-base outline-none text-grey-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        {errors[name]?.type === "required" && (
          <p className="text-red" role="alert">
            {name} is required
          </p>
        )}
      </div>
    </div>
  )
}

// {required: required} === {required} both named the same
