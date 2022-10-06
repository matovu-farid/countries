import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCev965pcV_5PkUyVcOBd9jQXmRvE5kfzk",
  authDomain: "countries-80085.firebaseapp.com",
  databaseURL: "https://countries-80085-default-rtdb.firebaseio.com",
  projectId: "countries-80085",
  storageBucket: "countries-80085.appspot.com",
  messagingSenderId: "310345122502",
  appId: "1:310345122502:web:a218e0c0b4b1e649250dc7",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
