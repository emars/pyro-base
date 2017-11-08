/**
 * Place your firebase configuration in this file
 */
import firebase from 'firebase'
// opt in module for firestore beta
import 'firebase/firestore'

const firebaseConfig = {}

export default firebase.initializeApp(firebaseConfig)
