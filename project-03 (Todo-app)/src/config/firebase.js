// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBu3MP2VkU9NMDvRHzRfYzwbDmXMZB975c",
  authDomain: "vite-chat-6d1a5.firebaseapp.com",
  projectId: "vite-chat-6d1a5",
  storageBucket: "vite-chat-6d1a5.appspot.com",
  messagingSenderId: "1063472112613",
  appId: "1:1063472112613:web:c92394019909b39d0b050c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);