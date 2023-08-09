import BrandCard from './BrandCard';

export default function BrandList() {
  return (
    <div className="grid-cols-4 grid-flow-row gap-4 grid">
      <div>
        <BrandCard />
      </div>
      <div>
        <BrandCard />
      </div>
      <div>
        <BrandCard />
      </div>
      <div>
        <BrandCard />
      </div>
      <div>
        <BrandCard />
      </div>
    </div>
  );
}
