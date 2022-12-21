import Select from "../Select/Select"
import i18next from "i18next"
import { useTranslation } from "react-i18next"

const languages = [
  { value: "eng", label: "ENG" },
  { value: "nl", label: "NL" },
]

const LanguageSelect = () => {
  const { i18n } = useTranslation()

  const changeLanguage = e => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <Select
      dataTestId="language-select"
      defaultValue={i18next.languages[0]}
      name="languages"
      id="languages"
      items={languages}
      onChange={changeLanguage}
    />
  )
}

export default LanguageSelect
