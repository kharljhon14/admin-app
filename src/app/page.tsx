import Button from '@/components/Button';
import Dialog from '@/components/Dialog';

import UsersGrid from '@/features/products/UsersGrid';

import { AiOutlinePlus } from 'react-icons/ai';

export default function Home() {
  return (
    <main>
      <div className="mx-10">
        <h1>Home</h1>
        <UsersGrid />
        <Button className="absolute bottom-10 right-10 h-14 w-14 text-2xl rounded-full flex items-center justify-center">
          <AiOutlinePlus />
        </Button>

        <Dialog />
      </div>
    </main>
  );
}
