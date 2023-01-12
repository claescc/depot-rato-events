// import { getStorage, ref, updateMetadata } from "firebase/storage"
// import { useTranslation } from "react-i18next"
// import { useState } from "react"

// const MetadataInjection = () => {
//   const { t } = useTranslation()

//   // Create a reference to the file whose metadata we want to change
//   const storage = getStorage()
//   const imgRef = ref(storage, "event-images/newyearsdrink.jpg")
//   const [temp, setTemp] = useState([])

//   // ADD CUTSOME METADATA
//   const newMetadata = {
//     customMetadata: {
//       eventname: t("events.newyear"),
//       eventdate: "14/01/2023",
//     },
//   }
//   // Update metadata properties
//   updateMetadata(imgRef, newMetadata)
//     .then(metadata => {
//       // Updated metadata for 'images/forest.jpg' is returned in the Promise
//       console.log(metadata)
//       setTemp(metadata)
//     })
//     .catch(error => {
//       // Uh-oh, an error occurred!
//     })

//   return <div>xxxx</div>
// }

// export default MetadataInjection
