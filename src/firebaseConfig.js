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
