import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

console.log("process.env", process.env)

// const firebaseConfig = {
//    apiKey: process.env.VUE_APP_APIKEY,
//    authDomain: process.env.VUE_APP_AUTHDOMAIN,
//    databaseUrl: process.env.VUE_APP_DATABASEURL,
//    projectId: process.env.VUE_APP_PROJECTID,
//    storageBucket: process.env.VUE_APP_STORAGEBUCKET,
//    messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
//    appId: process.env.VUE_APP_APPID
// }
const firebaseConfig = {
   apiKey: "AIzaSyBjsv-kPJ3WPDogMOH7efespLZVZ45vIYE",
   authDomain: "awesometodo-5ca37.firebaseapp.com",
   databaseURL: "https://awesometodo-5ca37.firebaseio.com",
   projectId: "awesometodo-5ca37",
   storageBucket: "awesometodo-5ca37.appspot.com",
   messagingSenderId: "218372950120",
   appId: "1:218372950120:web:89c8e2dd5b576e79e253dd"
}
console.log("firebaseConfig", firebaseConfig)

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
