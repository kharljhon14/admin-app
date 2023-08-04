'use client';

import Card from '@/components/Card';
import { BsPersonCircle } from 'react-icons/bs';
import LoginForm from './forms/LoginForm';
import SocialLoginForm from './forms/SocialLoginForm';

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import app from '@/services/firebase';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function Login() {
  const handleEmailLogin = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithPopup(auth, googleProvider);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="space-y-4 lg:w-1/4 md:w-1/2 w-full">
        <div className="flex flex-col items-center justify-center text-gray-500">
          <BsPersonCircle size={68} />
          <h1 className="text-xl text-gray-700 font-semibold uppercase">Admin</h1>
        </div>
        <LoginForm handleEmailLogin={handleEmailLogin} />
        <SocialLoginForm handleGoogleLogin={handleGoogleLogin} />
      </Card>
    </div>
  );
}
