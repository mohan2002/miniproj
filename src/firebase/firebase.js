import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBG-6gVRuS9wlgVDD_5OsxNsS65OSPYLg0",
    authDomain: "loanproj.firebaseapp.com",
    projectId: "loanproj",
    storageBucket: "loanproj.appspot.com",
    messagingSenderId: "488120927739",
    appId: "1:488120927739:web:19eb349db51e5065e7775e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore();