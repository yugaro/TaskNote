import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  // apiKey: Constants?.manifest?.extra?.apiKey,
  // authDomain: Constants?.manifest?.extra?.authDomain,
  // projectId: Constants?.manifest?.extra?.projectId,
  // storageBucket: Constants?.manifest?.extra?.storageBucket,
  // messagingSenderId: Constants?.manifest?.extra?.messagingSenderId,
  // appId: Constants?.manifest?.extra?.appId,
  apiKey: 'AIzaSyCjWJXepXk3Dhu6ekjmrbtmyaopzm-Ui5U',
  authDomain: 'tasknote-73486.firebaseapp.com',
  projectId: 'tasknote-73486',
  storageBucket: 'tasknote-73486.appspot.com',
  messagingSenderId: '632355017730',
  appId: '1:632355017730:web:7e86de32ca7cf222a8031b',
  measurementId: 'G-ZMWWHQMFXX',
};

require('firebase/firestore');

let firebaseApp: any;
if (!firebaseApp) {
  firebaseApp = initializeApp(firebaseConfig);
}

export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
// export const analytics = getAnalytics(firebaseApp);
