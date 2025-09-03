/* import { getStorage, ref, updateMetadata } from "firebase/storage"
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react"

const MetadataInjection = () => {
  const { t } = useTranslation()

  // Create a reference to the file whose metadata we want to change
  const storage = getStorage()
  //const imgRef = ref(storage, "event-images/newyearsdrink.jpg")
  const imgRef = ref(storage, "event-images/eventoutside.jpg")
  const [temp, setTemp] = useState([])
  const hasUpdated = useRef(false)

  // Update metadata properties
  useEffect(() => {
    if (hasUpdated.current) return
    hasUpdated.current = true

    // ADD CUTSOME METADATA
    const newMetadata = {
      customMetadata: {
       // eventname: t("events.newyear"),
        eventname: t("events.bbq"),
        eventdate: "28/06/2025",
      },
    }

    updateMetadata(imgRef, newMetadata)
      .then(metadata => {
        // Updated metadata for 'images/forest.jpg' is returned in the Promise
        console.log(metadata)
        console.log(temp)
        setTemp(metadata)
      })
      .catch(error => {
        // Uh-oh, an error occurred!
        console.error(error)
      })
  }, [imgRef, t])

  return <div>v1</div>
}

export default MetadataInjection
 */

/////// ----------------------------------------
// //// fix boolean on Event Toggle
///// // Activate Calendar component metadatainjection
///// // uncomment metadat injection and edit changes
///// // run npm each change
////// / when injecting is done comment out again !!
////// / FIX the static locales strings with dates (( PROBLEM ))