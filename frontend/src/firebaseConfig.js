import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

console.log("API Key:", process.env.REACT_APP_FIREBASE_API_KEY);
console.log("Auth Domain:", process.env.REACT_APP_FIREBASE_AUTHDOMAIN);
console.log("Project ID:", process.env.REACT_APP_FIREBASE_PROJECTID);
console.log("Storage Bucket:", process.env.REACT_APP_FIREBASE_STORAGEBUCKET);
console.log(
  "Messaging Sender ID:",
  process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID
);
console.log("App ID:", process.env.REACT_APP_FIREBASE_APP_ID);
console.log("Measurement ID:", process.env.REACT_APP_FIREBASE_MEASUREMENTID);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
