import { useState } from "react"
import { useForm } from "react-hook-form"
import FormInput from "../FormInput/FormInput"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const CreateStockItem = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const [showForm, setShowForm] = useState(false)

  const openForm = e => {
    e.preventDefault()
    setShowForm(true)
    console.log("showForm: ", showForm)
  }

  const onSubmit = data => {
    console.log("data: ", data)
    // update database firestorage
    setDoc(doc(db, "inventory", data.name), {
      name: data.name,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
    })
    alert("Success: stock item created in inventory")
    reset()
    setShowForm(false)
  }

  return (
    <>
      <div className="flex flex-row gap-8">
        <form>
          <button onClick={openForm} className="btn-secondary px-4">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>
        <div className="py-2">Add a new stock item</div>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="form-inventory">
          <FormInput
            label="Item name"
            name="name"
            isText={true}
            required="required"
            register={register}
            errors={errors}
          />
          <FormInput
            label="Item description"
            name="description"
            isText={true}
            required="required"
            register={register}
            errors={errors}
          />
          <FormInput
            label="Price per item"
            name="price"
            isText={false}
            required="required"
            register={register}
            errors={errors}
          />
          <FormInput
            label="Total quantity of items"
            name="quantity"
            isText={false}
            required="required"
            register={register}
            errors={errors}
          />

          <button type="submit" onSubmit={handleSubmit} className="btn-green">
            Add to Inventory
          </button>
        </form>
      )}
    </>
  )
}

export default CreateStockItem
