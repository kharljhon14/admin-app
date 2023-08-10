import Button from '@/components/Button';
import Card from '@/components/Card';
import Chip from '@/components/Chip';
import Image from 'next/image';

export default function UserCard() {
  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center space-x-2">
        <div className="bg-black h-[45px] w-[45px] rounded-full"></div>
        <h1 className="flex-1 font-semibold text-md">Kharl Jhon Rhane Enriquez</h1>
      </div>
      <div className="flex space-x-3">
        <Chip />
        <Chip />
      </div>
    </Card>
  );
}
