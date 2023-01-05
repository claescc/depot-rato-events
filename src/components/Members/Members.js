import { useTranslation } from "react-i18next"
import { db } from "../../firebaseConfig"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { collection } from "firebase/firestore"

const Members = () => {
  const { t } = useTranslation()
  const query = collection(db, "members")
  const [docs, loading] = useCollectionData(query)

  return (
    <div className="text-green-500 mx-auto max-w-3xl pb-12">
      <div className="p-4">
        <div className="text-xl py-2">{t("contact.ourteam")}</div>
        {loading && "Loading..."}
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {docs?.map(doc => (
          <div key={doc.id} className="h-28 w-32 m-4 flex flex-col">
            <img className="h-24 w-24 mx-auto rounded-full " src={doc.avatar} alt={doc.firstname}></img>
            <div className="text-xs p-1 mx-auto">
              {doc.firstname} {doc.lastname}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Members
