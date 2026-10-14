import { useTranslation } from "react-i18next"
import { faChampagneGlasses, faEgg, faFire, faGhost, faPizzaSlice } from "@fortawesome/free-solid-svg-icons"

const eventDefinitions = [
  { id: "newyear", name: "events.newyear", date: "events.nydate", information: "events.nyinfo", icon: faChampagneGlasses },
  { id: "easter", name: "events.easter", date: "events.easterdate", information: "events.easterinfo", icon: faEgg },
  { id: "pizza", name: "events.pizza", date: "events.pizzadate", information: "events.pizzainfo", icon: faPizzaSlice },
  { id: "bbq", name: "events.bbq", date: "events.bbqdate", information: "events.bbqinfo", icon: faFire },
  { id: "halloween", name: "events.halloween", date: "events.halloweendate", information: "events.halloweeninfo", icon: faGhost },
]

export const getEvents = t =>
  eventDefinitions.map(({ id, name, date, information, icon }) => ({
    id,
    icon,
    eventname: t(name),
    eventdate: t(date),
    eventlocation: t("events.location"),
    eventinformation: t(information),
  }))

export const useEventToggle = () => {
  const { t } = useTranslation()
  return getEvents(t)[0]
}
