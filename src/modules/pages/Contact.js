import ComponentSpacer from "../../components/ComponentSpacer/ComponentSpacer"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactIntro from "../../components/ContactIntro/ContactIntro"
import JoinUs from "../../components/JoinUs/JoinUs"
// import SponsorFilterList from "../../components/SponsorFilterList/SponsorFilterList"
import SponsorInfo from "../../components/SponsorInfo/SponsorInfo"

export default function Contact() {
  return (
    <>
      <ComponentSpacer />
      <ContactIntro />
      <JoinUs />
      <div id="volunteer-contact">
        <ContactForm />
      </div>
      <SponsorInfo />
      <ComponentSpacer />
    </>
  )
}
