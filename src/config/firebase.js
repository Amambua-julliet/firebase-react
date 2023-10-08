
import { initializeApp } from "firebase/app";
import  {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBDDavSwpUSoZt6eiH3JZcj5UrlEUqP9jQ",
  authDomain: "fir-course-9fbe1.firebaseapp.com",
  projectId: "fir-course-9fbe1",
  storageBucket: "fir-course-9fbe1.appspot.com",
  messagingSenderId: "285320455840",
  appId: "1:285320455840:web:bb50f615b36df8404b4bc5",
  measurementId: "G-ZNEBEJG9KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth= getAuth(app)
 export const googleProvider= new GoogleAuthProvider()
 export const db =getFirestore(app)
 export const storage =getStorage(app)