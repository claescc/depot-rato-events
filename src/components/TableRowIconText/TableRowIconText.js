import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TableRowIconText = ({ icon, text }) => {
  return (
    <tr>
      <td className="align-top w-8">
        <FontAwesomeIcon icon={icon} />
      </td>
      <td>{text}</td>
    </tr>
  )
}

export default TableRowIconText
