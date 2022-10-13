import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyANrW8f6STkB90S-aa9FoeG9QNgzdBNCNc",
    authDomain: "slack-clone-c3323.firebaseapp.com",
    projectId: "slack-clone-c3323",
    storageBucket: "slack-clone-c3323.appspot.com",
    messagingSenderId: "195093247903",
    appId: "1:195093247903:web:5488b06b4acf9fc9156faa",
    measurementId: "G-6HZMKEB036"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db