
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnfOe6B5ru2IBnDdKDNQ5BjcMGB0sYzos",
  authDomain: "videoapp-973e9.firebaseapp.com",
  projectId: "videoapp-973e9",
  storageBucket: "videoapp-973e9.appspot.com",
  messagingSenderId: "806492448280",
  appId: "1:806492448280:web:c9dbd874a1a5171667056d",
  measurementId: "G-ZFVGNTBM50"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;