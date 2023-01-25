import ComponentSpacer from "../ComponentSpacer/ComponentSpacer"
import CreateStockItem from "../CreateStockItem/CreateStockItem"
import InventoryStockList from "../InventoryStockList/InventoryStockList"

const ManageStock = () => {
  return (
    <>
      <div className="dre-title-dark-standalone">Sponsorship stock inventory</div>
      <div className="dre-container">
        <InventoryStockList />
      </div>
      <ComponentSpacer />

      <div className="dre-title-dark-standalone">Create inventory</div>
      <div className="dre-container">
        <CreateStockItem />
      </div>
      <ComponentSpacer />

      <div className="dre-title-dark-standalone">Update a stock item</div>
      <div className="dre-container">
        <div>to-do: Update an existing item (CLOUD FIRESTORE)</div>
        <div>to-do: Select item you want to update (CLOUD FIRESTORE)</div>
        <div>to-do: delete existing sponsor-item from sponsor-items (CLOUD FIRESTORE)</div>
      </div>
      <ComponentSpacer />
    </>
  )
}

export default ManageStock
