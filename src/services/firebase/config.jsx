const config = {
  apiKey: import.meta.env.VITE_FIREBASE_GOOGLEAUTH_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_GOOGLEAUTH_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_GOOGLEAUTH_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_GOOGLEAUTH_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_GOOGLEAUTH_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_GOOGLEAUTH_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_GOOGLEAUTH_MEASUREMENTID
};

export default config;