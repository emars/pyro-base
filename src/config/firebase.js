import firebase from 'firebase'
import 'firebase/firestore'

/**
 * PLACE YOUR FIREBASE CONFIGURATION HERE
 */
// export const firebaseConfig = {}
export const firebaseConfig = {
  apiKey: 'AIzaSyAvCe5iKzisMJJ-eKrIMj6bywqbh08tI_o',
  authDomain: 'test-firebase-c33bd.firebaseapp.com',
  databaseURL: 'https://test-firebase-c33bd.firebaseio.com',
  projectId: 'test-firebase-c33bd',
  storageBucket: 'test-firebase-c33bd.appspot.com',
  messagingSenderId: '669934082310'
}

export default firebase.initializeApp(firebaseConfig)
