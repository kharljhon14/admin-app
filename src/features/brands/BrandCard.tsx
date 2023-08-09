'use client';

import Button from '@/components/Button';
import Card from '@/components/Card';

export default function BrandCard() {
  return (
    <Card className="space-y-4">
      <div>
        <h1 className=" font-bold">Apple</h1>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora magni quaerat eos
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between space-x-3">
          <Button className="uppercase text-sm flex-1">View</Button>
          <Button
            variant="secondary"
            className="uppercase flex-1"
          >
            Edit
          </Button>
        </div>
        <Button
          variant="destructive"
          className="uppercase w-full"
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}
