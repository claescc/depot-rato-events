import ContactForm from "../../components/ContactForm/ContactForm"
import ContactIntro from "../../components/ContactIntro/ContactIntro"
import JoinUs from "../../components/JoinUs/JoinUs"
// import TeamAvatars from "../../components/TeamAvatars/TeamAvatars"

export default function Contact() {
  return (
    <>
      <ContactIntro />
      <ContactForm />
      <JoinUs />
      {/* <TeamAvatars /> */}
    </>
  )
}
