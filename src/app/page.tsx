import AddProductForm from '@/features/products/AddProductForm';
import ProductGrid from '@/features/products/ProductGrid';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="mx-10">
        <h1>Home</h1>
        <ProductGrid />
      </div>
    </main>
  );
}
