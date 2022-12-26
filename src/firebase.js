import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHxYP9oQO4Ltrv2dypKjAlHa8LY3-Ltb0",
  authDomain: "alo-chat-7edc7.firebaseapp.com",
  projectId: "alo-chat-7edc7",
  storageBucket: "alo-chat-7edc7.appspot.com",
  messagingSenderId: "128027033596",
  appId: "1:128027033596:web:4a4cf2aaa51d59a6d93c79"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();