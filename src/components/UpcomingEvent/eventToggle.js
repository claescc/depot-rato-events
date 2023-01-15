export const eventToggle = () => {
  const allEvents = [
    {
      folder: "event-images/newyearsdrink.jpg",
      showevent: false,
    },
    {
      folder: "event-images/easter.jpg",
      showevent: true,
    },

    {
      folder: "event-images/eventoutside.jpg",
      showevent: false,
    },

    {
      folder: "event-images/halloween.jpg",
      showevent: false,
    },
  ]
  const toggle = allEvents.find(event => event.showevent === true)
  return toggle.folder
}
