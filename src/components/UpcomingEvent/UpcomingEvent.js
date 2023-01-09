import { useTranslation } from "react-i18next"
import { useEffect, useState, useMemo } from "react"
import { ref, listAll, getDownloadURL, getStorage } from "firebase/storage"
import { v4 } from "uuid"

const UpcomingEvent = () => {
  const { t } = useTranslation()
  const [imageHomePage, setImageHomePage] = useState()
  const storage = getStorage()
  const imageListRef = useMemo(() => ref(storage, "event-images/"), [storage])

  useEffect(() => {
    const fetch = async () => {
      const imageList = await listAll(imageListRef)
      const imageListItems = await Promise.all(
        imageList.items.map(async item => {
          const url = await getDownloadURL(item)
          let obj = {
            id: v4(),
            name: item.name,
            folderpath: item.fullPath,
            urlpath: url,
            showOnHomePage: item.name === "newyearsdrink.jpg" ? true : false,
          }
          if (obj.showOnHomePage) {
            setImageHomePage(obj)
          }
          return obj
        }),
      )
      console.log(imageListItems)
    }

    fetch()
  }, [imageListRef])

  return (
    <div className="text-green-500 mx-auto max-w-3xl">
      <div className="px-4">
        <div className="text-xl py-2">{t("events.upcoming")}</div>
      </div>
      <div className="flex">
        {imageHomePage && (
          <div key={imageHomePage.id} className="m-4 flex flex-col sm:flex-row">
            <img className="w-96" src={imageHomePage.urlpath} alt={imageHomePage.name}></img>
            <div className="flex flex-col sm:pl-4">
              <div className="pt-4 sm:pt-0 font-bold ">{t("events.newyear")}</div>
              <div className="pt-4">{t("events.nydate")}</div>
              <div className="pt-4">{t("events.location")}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UpcomingEvent
