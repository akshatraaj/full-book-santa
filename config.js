import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyA6ht7GZSUf0hg4nMv3XfVphmDFkqk-EmE",
  authDomain: "booksanta-firestore.firebaseapp.com",
  databaseURL: "https://booksanta-firestore.firebaseio.com",
  projectId: "booksanta-firestore",
  storageBucket: "booksanta-firestore.appspot.com",
  messagingSenderId: "971929412324",
  appId: "1:971929412324:web:c134a7d0db99895cc902f1",
  measurementId: "G-CPWMK88CSD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
