import ContactForm from "../../components/ContactForm/ContactForm"
import ContactIntro from "../../components/ContactIntro/ContactIntro"
import JoinUs from "../../components/JoinUs/JoinUs"
import Members from "../../components/Members/Members"

export default function Contact() {
  return (
    <>
      <ContactIntro />
      <ContactForm />
      <JoinUs />
      <Members />
    </>
  )
}
