import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCOhugFrw0x3FDkkEIBXZ887xGQKdh9zjg",
  authDomain: "buskaro-8ef18.firebaseapp.com",
  databaseURL: "https://buskaro-8ef18-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "buskaro-8ef18",
  storageBucket: "buskaro-8ef18.appspot.com",
  messagingSenderId: "478314646703",
  appId: "1:478314646703:web:c876e6dae84171d6f7985a"
}

if (!getApps().length) {
  
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }