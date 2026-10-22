import ContactForm from "../../components/ContactForm/ContactForm"
import ContactIntro from "../../components/ContactIntro/ContactIntro"
import JoinUs from "../../components/JoinUs/JoinUs"
import SponsorInfo from "../../components/SponsorInfo/SponsorInfo"

export default function Contact() {
  return (
    <>
      <ContactIntro />
      <JoinUs />
      <section id="volunteer-contact" className="scroll-mt-8 bg-green-100/30 px-5 py-12 sm:px-8 sm:py-16">
        <ContactForm />
      </section>
      <SponsorInfo />
    </>
  )
}
