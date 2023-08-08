import AddProductForm from '@/features/products/AddProductForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div>
        <h1>Home</h1>
        <AddProductForm />
      </div>
    </main>
  );
}
