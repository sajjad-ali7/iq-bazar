import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARxVtdrLDecJf3U6QCn7KRuq9CJYsvBOY",
  authDomain: "e-commerce-pazar.firebaseapp.com",
  projectId: "e-commerce-pazar",
  storageBucket: "e-commerce-pazar.appspot.com",
  messagingSenderId: "29933461393",
  appId: "1:29933461393:web:a14ccb2e646abcdcc50430",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
