import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
   apiKey: "AIzaSyBjsv-kPJ3WPDogMOH7efespLZVZ45vIYE",
   authDomain: "awesometodo-5ca37.firebaseapp.com",
   databaseURL: "https://awesometodo-5ca37.firebaseio.com",
   projectId: "awesometodo-5ca37",
   storageBucket: "awesometodo-5ca37.appspot.com",
   messagingSenderId: "218372950120",
   appId: "1:218372950120:web:89c8e2dd5b576e79e253dd"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
