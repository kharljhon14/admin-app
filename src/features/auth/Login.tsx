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
import { useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { FIREBASE_USER_NOT_FOUND } from '@/constants';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const handleEmailLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(auth, email, password);

      setSuccess(true);
      setLoading(false);
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        if (err.code === FIREBASE_USER_NOT_FOUND) setError('Account does not exist');
        else setError('Incorrect email or password');
      }
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithPopup(auth, googleProvider);

      setSuccess(true);
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="space-y-4 lg:w-1/4 md:w-1/2 w-full">
        <div className="flex flex-col items-center justify-center text-gray-500">
          <BsPersonCircle size={68} />
          <h1 className="text-xl text-gray-700 font-semibold uppercase">Admin</h1>
        </div>
        <LoginForm
          loading={loading}
          handleEmailLogin={handleEmailLogin}
          error={error}
        />
        <SocialLoginForm handleGoogleLogin={handleGoogleLogin} />
      </Card>
    </div>
  );
}