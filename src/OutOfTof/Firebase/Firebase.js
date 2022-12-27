import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCt-RnOnaJpptKDigIKh1OYNBZ7odz-rL4",
  authDomain: "social-inr.firebaseapp.com",
  projectId: "social-inr",
  storageBucket: "social-inr.appspot.com",
  messagingSenderId: "769544044387",
  appId: "1:769544044387:web:bef3f01e2de3f474599d56",
  // measurementId: "G-005DXBGCWB",
};

const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);

 export default app;
