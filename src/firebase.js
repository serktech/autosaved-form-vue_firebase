import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    // Populate your firebase configuration data here.
    apiKey: "AIzaSyCQbMP_UqBf6j5S4LYWDC3FMQNoAf4osjs",
    authDomain: "autosaved-form.firebaseapp.com",
    databaseURL: "https://autosaved-form.firebaseio.com",
    projectId: "autosaved-form",
    storageBucket: "autosaved-form.appspot.com",
    messagingSenderId: "511946254930",
    appId: "1:511946254930:web:3b78ea9bfd592a67148d8b"
});

const db = firebaseApp.firestore();

// Export the database for components to use.
export { db }