import { useState } from "react"
import { db } from "../../firebaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { useTranslation } from "react-i18next"

const ContacthtmlForm = () => {
  const { t } = useTranslation()
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const userCollectionRef = collection(db, "contactdata")

  const handleSubmit = event => {
    event.preventDefault()

    addDoc(userCollectionRef, {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      message: message,
    })
      .then(() => {
        alert("Contactform Submitted Successfully!")
      })
      .catch(error => {
        alert(error.message)
      })

    setFirstname("")
    setLastname("")
    setPhone("")
    setEmail("")
    setMessage("")
  }

  return (
    <form className="body-font py-8 relative">
      <div className="container px-5 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="firstname" className="leading-7 text-sm text-green-500">
                  {t("form.firstname")}
                </label>
                <input
                  value={firstname}
                  onChange={e => setFirstname(e.target.value)}
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="w-full rounded border border-green-500 focus:border-mint-200 text-base outline-none text-grey-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="lastname" className="leading-7 text-sm text-green-500">
                  {t("form.lastname")}
                </label>
                <input
                  value={lastname}
                  onChange={e => setLastname(e.target.value)}
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="w-full rounded border border-green-500 focus:border-mint-200 text-base outline-none text-grey-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="phone" className="leading-7 text-sm text-green-500">
                  {t("form.phone")}
                </label>
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full rounded border border-green-500 focus:border-mint-200 text-base outline-none text-grey-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-green-500">
                  {t("form.email")}
                </label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border border-green-500 focus:border-mint-200 text-base outline-none text-grey-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-green-500">
                  {t("form.message")}
                </label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  id="message"
                  name="message"
                  className="w-full rounded border border-green-500 focus:border-mint-200 h-52 text-base outline-none text-grey-400 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onSubmit={handleSubmit}
                className="flex mx-auto text-white hover:text-green-500 bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-mint-200 rounded text-lg"
              >
                {t("form.submit")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContacthtmlForm
