import Card from '@/components/Card';
import RegisterForm from './forms/RegisterForm';
import { BsPersonCircle } from 'react-icons/bs';

export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="space-y-4 lg:w-1/4 md:w-1/2 w-full">
        <div className="flex flex-col items-center justify-center text-gray-500">
          <BsPersonCircle size={68} />
          <h1 className="text-xl text-gray-700 font-semibold uppercase">Admin</h1>
        </div>
        <RegisterForm />
      </Card>
    </div>
  );
}
