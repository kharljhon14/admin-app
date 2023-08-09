import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
