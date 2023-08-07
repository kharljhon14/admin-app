// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCiHX0ZiI1sxtgV7nC6Y2MKo10Xm-mgKfk',
  authDomain: 'admin-app-3e966.firebaseapp.com',
  projectId: 'admin-app-3e966',
  storageBucket: 'admin-app-3e966.appspot.com',
  messagingSenderId: '550276246457',
  appId: '1:550276246457:web:c161d522459a39b130a468',
  measurementId: 'G-HGSCF3NED8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export default app;
