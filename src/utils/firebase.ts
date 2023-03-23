/* eslint-disable import/prefer-default-export */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBr_0F-Br-neIp789CTTM2-6r7tsdZD6Ls',
  authDomain: 'rick-motry.firebaseapp.com',
  projectId: 'rick-motry',
  storageBucket: 'rick-motry.appspot.com',
  messagingSenderId: '25721086141',
  appId: '1:25721086141:web:c25c5c561ae6bf140397d4',
  measurementId: 'G-0DRCR585XC',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
