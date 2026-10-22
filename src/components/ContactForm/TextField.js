import { useTranslation } from "react-i18next"

export default function TextField({ label, name, required, register, errors }) {
  const { t } = useTranslation()

  return (
    <div className="p-2">
      <div className="relative">
        <label htmlFor={name} className="mb-2 block text-sm font-moonbold text-green-700">
          {t(label)}
          {required === "required" && <span className="pl-1 text-red after:content-['*']"></span>}
        </label>
        <input
          id={name}
          {...register(name, { required })}
          aria-invalid={errors[name] ? "true" : "false"}
          className="w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-base text-grey-400 outline-none transition focus:border-pop-blue focus:ring-2 focus:ring-pop-blue/30"
        />
        {errors[name]?.type === "required" && (
          <p className="mt-2 text-sm text-red" role="alert">
            {name} is required
          </p>
        )}
      </div>
    </div>
  )
}

// {required: required} === {required} both named the same
