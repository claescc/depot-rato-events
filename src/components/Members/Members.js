import { useTranslation } from "react-i18next"
import { db } from "../../firebaseConfig"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { collection } from "firebase/firestore"

const Members = () => {
  const { t } = useTranslation()
  const query = collection(db, "members")
  const [docs, loading] = useCollectionData(query)

  return (
    <div className="dre-container">
      <div className="dre-title">
        {t("contact.ourteam")}
        {loading && "Loading..."}
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {docs?.map(doc => (
          <div key={doc.firstname} className="h-28 w-32 m-4 flex flex-col">
            <img
              key={doc.avatar}
              className="max-h-24 max-w-24 mx-auto rounded-full "
              src={doc.avatar}
              alt={doc.firstname}
            ></img>
            <div key={doc.lastname} className="text-xs p-1 mx-auto">
              {doc.firstname} {doc.lastname}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Members
