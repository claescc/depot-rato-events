import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_DRE_API_KEY,
  authDomain: process.env.REACT_APP_DRE_AUTH_DOMAIN,
  projectId: "depot-rato-events",
  storageBucket: "depot-rato-events.appspot.com",
  messagingSenderId: process.env.REACT_APP_DRE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_DRE_APP_ID,
  measurementId: process.env.REACT_APP_DRE_MEASUREMENT_ID,
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)

//   projectId: process.env.REACT_APP_DRE_PROJ_ID,
// storageBucket: process.env.REACT_APP_DRE_STORAGE_BUCKET
