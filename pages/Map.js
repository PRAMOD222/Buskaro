import firebase from 'firebase/app';
import 'firebase/database';
import {db,auth} from '../components/Firebase'

export default function LocationData() {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCOhugFrw0x3FDkkEIBXZ887xGQKdh9zjg",
    authDomain: "buskaro-8ef18.firebaseapp.com",
    databaseURL: "https://buskaro-8ef18-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "buskaro-8ef18",
    storageBucket: "buskaro-8ef18.appspot.com",
    messagingSenderId: "478314646703",
    appId: "1:478314646703:web:c876e6dae84171d6f7985a"

  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // Retrieve location data from Firebase Realtime Database
  const database = firebase.database();
  const locationRef = database.ref('location');
  locationRef.once('value').then((snapshot) => {
    const locationData = snapshot.val();
    console.log(locationData);
  });

  return <div>Retrieving location data...</div>;
}
