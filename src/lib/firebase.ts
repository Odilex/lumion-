'use client';

import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyB27KL7yrT6ErU0TblzadqvfcXw-oDCZ6Q",
  authDomain: "lumion-6f197.firebaseapp.com",
  projectId: "lumion-6f197",
  storageBucket: "lumion-6f197.firebasestorage.app",
  messagingSenderId: "491037696084",
  appId: "1:491037696084:web:39c489c65cce789adb0dc1",
  measurementId: "G-0GFK9J2V36"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Analytics and export it
export const initializeAnalytics = async () => {
  if (await isSupported()) {
    return getAnalytics(firebase_app);
  }
  return null;
};

export default firebase_app; 