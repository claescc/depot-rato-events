import { useTranslation } from "react-i18next"
import { useEffect, useState, useMemo } from "react"
import { ref, getStorage } from "firebase/storage"
import { fetchStorage } from "../../api/fetchStorage"
import { useEventToggle } from "./useEventToggle"
import ComponentSpacer from "../ComponentSpacer/ComponentSpacer"
import { faCalendar, faLocation, faClock, faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import TableRowIconText from "../TableRowIconText/TableRowIconText"

const UpcomingEvent = () => {
  const { t } = useTranslation()
  const [imageHomePage, setImageHomePage] = useState()
  const storage = getStorage()
  const imageListRef = useMemo(() => ref(storage, "event-images/"), [storage])
  const toggleEventHomePage = useEventToggle()

  useEffect(() => {
    const fetch = async () => {
      const imageListItems = await fetchStorage(imageListRef)
      const homePageListItem = imageListItems.find(item => item.folder === toggleEventHomePage.folder)
      setImageHomePage(homePageListItem)
    }

    fetch()
  }, [imageListRef, toggleEventHomePage.folder])

  return (
    <div className="mx-auto bg-green-500">
      <ComponentSpacer />
      <div className="dre-container text-white">
        <div className="dre-upcoming-title">{t("events.upcoming")}</div>
        <ComponentSpacer />
        <div className="dre-upcoming-wrapper">
          {imageHomePage && (
            <div key={imageHomePage.id} className="flex flex-col sm:flex-row">
              <img className="w-96" src={imageHomePage.urlpath} alt={imageHomePage.name}></img>
              <div className="flex flex-col pt-4 sm:pt-0 sm:pl-4">
                <table className="border-separate border-spacing-2">
                  <tbody>
                    <TableRowIconText icon={faCalendar} text={toggleEventHomePage.eventname} />
                    <TableRowIconText icon={faClock} text={toggleEventHomePage.eventdate} />
                    <TableRowIconText icon={faLocation} text={toggleEventHomePage.eventlocation} />
                    <TableRowIconText icon={faCircleInfo} text={toggleEventHomePage.eventinformation} />
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <ComponentSpacer />
      </div>
      <ComponentSpacer />
    </div>
  )
}

export default UpcomingEvent
