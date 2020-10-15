import * as admin from 'firebase-admin'

const firebaseConfig = {
    apiKey: "AIzaSyCHlmPD5TLMjrpHi7ev1O4V0YGXHj8meRo",
    authDomain: "hand-talk-challenge.firebaseapp.com",
    databaseURL: "https://hand-talk-challenge.firebaseio.com",
    projectId: "hand-talk-challenge",
    storageBucket: "hand-talk-challenge.appspot.com",
    messagingSenderId: "904491453745",
    appId: "1:904491453745:web:263a25ffb0d494712e7410",
    measurementId: "G-C8DT9KDHKT"
};

const firebase = admin.initializeApp(firebaseConfig)

const firestore = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { firebase, firestore, auth, storage }