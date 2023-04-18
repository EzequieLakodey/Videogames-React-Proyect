import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl3lb3MeJ9dCUFX6dYwHaL2eLTCZ7lUow",

  authDomain: "reactjs-coderhouse-b581a.firebaseapp.com",

  projectId: "reactjs-coderhouse-b581a",

  storageBucket: "reactjs-coderhouse-b581a.appspot.com",

  messagingSenderId: "474927222463",

  appId: "1:474927222463:web:9601cd302ca6b9e898400a",

  measurementId: "G-H87PV8HHFT",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
