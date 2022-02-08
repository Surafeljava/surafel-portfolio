import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC3fGgrj8qJmY0unvsS08NanccgFpoEutE",
  authDomain: "portfolio-50eed.firebaseapp.com",
  projectId: "portfolio-50eed",
  storageBucket: "portfolio-50eed.appspot.com",
  messagingSenderId: "1060375982133",
  appId: "1:1060375982133:web:4596909c3cb9fd5ce4c17c",
  measurementId: "G-6XSZ07PS3Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;