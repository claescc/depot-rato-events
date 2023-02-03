import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const InventoryStockList = () => {
  const [inventory, setInventory] = useState([])
  const stockitems = useSelector(state => state.inventory.value)
  const [stock, setStock] = useState([])

  useEffect(() => {
    setStock(Object.keys(stockitems))
  }, [])

  useEffect(() => {
    const fetch = async () => {
      const data = await getDocs(collection(db, "inventory"))
      data.forEach(doc => {
        setInventory(prevInventory => {
          return [
            ...prevInventory,
            {
              name: doc.data().name,
              description: doc.data().name,
              price: doc.data().price,
              quantity: doc.data().quantity,
            },
          ]
        })
      })
    }
    fetch()
  }, [])
  // Leave empty do not rerender = read only once out of db

  return (
    <>
      <div className="dre-table-head">
        <div className="dre-table-item-xs">nr</div>
        <div className="dre-table-item-sm">name</div>
        <div className="dre-table-item-m">description</div>
        <div className="dre-table-item-sm text-right">unit price</div>
        <div className="dre-table-item-sm text-right">quantity</div>
        <div className="dre-table-item-sm text-right">total</div>
      </div>

      {stock.map((item, i) => {
        return (
          <div key={item.name} className="dre-table-row">
            <div className="dre-table-item-xs">{i}</div>
            <div className="dre-table-item-sm">{item.name}</div>
            <div className="dre-table-item-m">{item.description}</div>
            <div className="dre-table-item-sm text-right">{item.price}&nbsp;&euro;</div>
            <div className="dre-table-item-sm text-right">{item.quantity}</div>
            <div className="dre-table-item-sm text-right">{item.price * item.quantity}&nbsp;&euro;</div>
          </div>
        )
      })}
      {inventory.map((item, i) => {
        return (
          <div key={item.name} className="dre-table-row">
            <div className="dre-table-item-xs">{i}</div>
            <div className="dre-table-item-sm">{item.name}</div>
            <div className="dre-table-item-m">{item.description}</div>
            <div className="dre-table-item-sm text-right">{item.price}&nbsp;&euro;</div>
            <div className="dre-table-item-sm text-right">{item.quantity}</div>
            <div className="dre-table-item-sm text-right">{item.price * item.quantity}&nbsp;&euro;</div>
          </div>
        )
      })}
    </>
  )
}

export default InventoryStockList
