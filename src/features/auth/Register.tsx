'use client';

import Card from '@/components/Card';
import RegisterForm from './forms/RegisterForm';
import { BsPersonCircle } from 'react-icons/bs';
import Link from 'next/link';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import app, { db } from '@/services/firebase';
import { routes } from '@/routes';
import { RegisterSchemaType } from '@/schemas/register';

const auth = getAuth(app);

export default function Register() {
  const handleAddUser = async ({ name, email, password }: RegisterSchemaType) => {
    try {
      const newData = await createUserWithEmailAndPassword(auth, email, password);

      const docRef = await addDoc(collection(db, 'users'), {
        id: newData.user.uid,
        name,
        email: newData.user.email,
      });

      console.log(newData, docRef);
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
        <RegisterForm handleAddUser={handleAddUser} />
        <div>
          <Link
            href={routes.LOGIN}
            className="text-sm text-blue-500 hover:underline"
          >
            Already have an account? Log in instead.
          </Link>
        </div>
      </Card>
    </div>
  );
}
