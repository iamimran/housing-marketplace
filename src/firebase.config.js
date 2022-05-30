// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFireStore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB72xMBevb1vn3pW_8Po-sXAWJIOwyVDhA',
    authDomain: 'housing-marketplace-f8a98.firebaseapp.com',
    projectId: 'housing-marketplace-f8a98',
    storageBucket: 'housing-marketplace-f8a98.appspot.com',
    messagingSenderId: '953917489428',
    appId: '1:953917489428:web:1740b84cefcd05e2eec201',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore()
