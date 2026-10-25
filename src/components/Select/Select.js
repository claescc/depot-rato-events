const Select = ({
  items = [],
  value = undefined,
  defaultValue = undefined,
  onChange = () => {},
  id = "",
  name = "",
  ariaLabel = "",
  dataTestId = "select-component",
}) => {
  return (
    <select
      className="min-h-11 rounded-lg border border-white/20 bg-green-700 px-3 text-sm text-white outline-none transition focus:border-pop-blue focus:ring-2 focus:ring-pop-blue/40"
      defaultValue={defaultValue}
      value={value}
      name={name}
      id={id}
      aria-label={ariaLabel || undefined}
      onChange={onChange}
      data-testid={dataTestId}
    >
      {items.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

export default Select
