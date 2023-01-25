import classNames from "classnames"

const FormInput = ({ label, name, isText, required, register, errors }) => {
  const inputLayout = classNames("border-none", {
    "basis-full": isText,
    grow: !isText,
  })

  return (
    <>
      <div className={inputLayout}>
        <label htmlFor={name} className="leading-7 text-sm text-green-500">
          {label}
          {required === "required" ? <span className="text-red pl-1 after:content-['*']"></span> : <span></span>}
        </label>
        <input
          {...register(name, { required })}
          type={isText ? "text" : "number"}
          step={isText ? "" : "0.01"}
          aria-invalid={errors[name] ? "true" : "false"}
          className="form-input"
        />
        {errors[name]?.type === "required" && (
          <p className="text-red" role="alert">
            {name} is required
          </p>
        )}
      </div>
    </>
  )
}

export default FormInput
