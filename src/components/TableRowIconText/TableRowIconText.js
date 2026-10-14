import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TableRowIconText = ({ icon, text }) => {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 w-5 shrink-0 text-center text-teal-300">
        <FontAwesomeIcon icon={icon} aria-hidden="true" />
      </span>
      <span>{text}</span>
    </div>
  )
}

export default TableRowIconText
