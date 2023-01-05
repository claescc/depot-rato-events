import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAU198kSmSBDASUKiM03c9MIkAE8NyQkkc",
  authDomain: "depot-rato-events.firebaseapp.com",
  projectId: "depot-rato-events",
  storageBucket: "depot-rato-events.appspot.com",
  messagingSenderId: "927333132688",
  appId: "1:927333132688:web:2fddb884d0e93820c62b15",
  measurementId: "G-YTXZX146B8",
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// apiKey: process.env.REACT_APP_DRE_API_KEY,
//   authDomain: process.env.REACT_APP_DRE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_DRE_PROJ_ID,
//   storageBucket: process.env.REACT_APP_DRE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_DRE_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_DRE_APP_ID,
//   measurementId: process.env.REACT_APP_DRE_MEASUREMENT_ID,
