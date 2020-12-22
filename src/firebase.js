import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA2SbIxl_yDys384fyzSvfaD-z5mb0RzI4",
    authDomain: "fb-clone-7c933.firebaseapp.com",
    projectId: "fb-clone-7c933",
    storageBucket: "fb-clone-7c933.appspot.com",
    messagingSenderId: "497341003306",
    appId: "1:497341003306:web:3f3bd8c6e9fcaf64d43553",
    measurementId: "G-YK9FLP4BNZ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;