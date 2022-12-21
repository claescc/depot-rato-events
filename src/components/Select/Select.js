import React from "react"

const Select = ({
  items = [],
  value = undefined,
  defaultValue = undefined,
  onChange = () => {},
  id = "",
  name = "",
  dataTestId = "select-component",
}) => {
  return (
    <select className="bg-green-500 text-white" defaultValue={defaultValue} value={value} name={name} id={id} onChange={onChange} data-testid={dataTestId}>
      {items.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

export default Select
