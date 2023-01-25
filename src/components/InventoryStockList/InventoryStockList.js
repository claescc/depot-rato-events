import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { useEffect, useState } from "react"

const InventoryStockList = () => {
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getDocs(collection(db, "inventory"))
      data.forEach(doc => {
        setInventory(prevInventory => {
          return [
            ...prevInventory,
            {
              name: doc.data().name,
              price: doc.data().price,
              count: doc.data().quantity,
            },
          ]
        })
      })
    }
    fetch()
  }, [])
  // Leave empty do not rerender = read only once out of db

  useEffect(() => {
    console.log(inventory)
  }, [inventory])

  return (
    <>
      {inventory.map(item => {
        return (
          <div key={item.name} className="flex flex-row gap-4">
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.count}</div>
          </div>
        )
      })}
    </>
  )
}

export default InventoryStockList
