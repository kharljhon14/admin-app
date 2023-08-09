import AddProductForm from '@/features/products/AddUserForm';
import UsersGrid from '@/features/products/UsersGrid';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="mx-10">
        <h1>Home</h1>
        <UsersGrid />
      </div>
    </main>
  );
}
