import ComponentSpacer from "../../components/ComponentSpacer/ComponentSpacer"
import ManageStock from "../../components/ManageStock/ManageStock"

const Dashboard = () => {
  return (
    <>
      <ComponentSpacer />
      <div className="dre-container">
        <div className="dre-title text-3xl font-moon">ADMIN DASHBOARD</div>
      </div>
      <ManageStock />
      <ComponentSpacer />
    </>
  )
}

export default Dashboard
