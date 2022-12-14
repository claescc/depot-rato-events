import { useState, useRef } from "react"
import { useEffect } from "react"

const ContacthtmlForm = () => {
  const [name, setName] = useState("")
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current = renderCount.current + 1 // current is only a small part of a larger object, ref correctly to a specific part not the entire obj
  })

  return (
    <section className="body-font relative">
      <div className="container px-5 mx-auto">
        <div className="text-red">
          <div>name:{name}</div>
          <div>renderCount:{renderCount.current}</div>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-green-500">
                  Firstname
                </label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border border-green-500 focus:border-mint-200 text-base outline-none text-grey-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-green-500">
                  Lastname
                </label>
                <input
                  value=""
                  onChange=""
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border border-green-500 focus:border-mint-200 text-base outline-none text-grey-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-green-500">
                  Phone
                </label>
                <input
                  value=""
                  onChange=""
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border border-green-500 focus:border-mint-200 text-base outline-none text-grey-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-green-500">
                  Email
                </label>
                <input
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
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full rounded border border-green-500 focus:border-mint-200 h-32 text-base outline-none text-grey-400 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white hover:text-green-500 bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-mint-200 rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContacthtmlForm
