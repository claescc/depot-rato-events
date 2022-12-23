import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_DRE_API_KEY,
  authDomain: process.env.REACT_APP_DRE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_DRE_PROJ_ID,
  storageBucket: process.env.REACT_APP_DRE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DRE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_DRE_APP_ID,
  measurementId: process.env.REACT_APP_DRE_MEASUREMENT_ID,
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
