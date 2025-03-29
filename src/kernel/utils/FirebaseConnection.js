import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC31qtcgL32JRSBTeXxrMP3MfoGx4Yt4Rc",
  authDomain: "josle5e.firebaseapp.com",
  databaseURL: "https://josle5e-default-rtdb.firebaseio.com",
  projectId: "josle5e",
  storageBucket: "josle5e.firebasestorage.app",
  messagingSenderId: "143574372151",
  appId: "1:143574372151:web:3c26be32fe62bcc8b6d4b2"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };