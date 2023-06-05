import { useTranslation } from "react-i18next"

export const useEventToggle = () => {
  const { t } = useTranslation()

  const allEvents = [
    {
      folder: "event-images/newyearsdrink.jpg",
      eventname: t("events.newyear"),
      eventdate: t("events.nydate"),
      eventlocation: t("events.location"),
      eventinformation: t("events.nyinfo"),
      showevent: false,
    },
    {
      folder: "event-images/easter.jpg",
      eventname: t("events.easter"),
      eventdate: t("events.easterdate"),
      eventlocation: t("events.location"),
      eventinformation: t("events.easterinfo"),
      showevent: false,
    },
    {
      folder: "event-images/Pizzafeest.jpg",
      eventname: t("events.pizza"),
      eventdate: t("events.pizzadate"),
      eventlocation: t("events.location"),
      eventinformation: t("events.pizzainfo"),
      showevent: true,
    },

    {
      folder: "event-images/eventoutside.jpg",
      eventname: t("events.bbq"),
      eventdate: t("events.bbqdate"),
      eventlocation: t("events.location"),
      eventinformation: t("events.bbqinfo"),
      showevent: false,
    },

    {
      folder: "event-images/halloween.jpg",
      eventname: t("events.halloween"),
      eventdate: t("events.halloweendate"),
      eventlocation: t("events.location"),
      eventinformation: t("events.halloweeninfo"),
      showevent: false,
    },
  ]
  const toggle = allEvents.find(event => event.showevent === true)
  return toggle
}
