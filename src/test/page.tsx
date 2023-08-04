'use client';

import Button from '@/components/Button';
import Label from '@/components/Label';
import Sheet from '@/components/Sheet';
import TextField from '@/components/TextField';
import useSheet from '../hooks/useSheet';

export default function TestPage() {
  const { active, showSheet, hideSheet } = useSheet(false);

  return (
    <div className=" h-screen space-y-4">
      <div className="text-center py-4">
        <h1 className="text-2xl uppercase font-bold text-blue-900">Components Test Page</h1>
      </div>

      <div className="space-y-4">
        <h2 className="text-center uppercase text-lg text-blue-900 font-semibold">Buttons</h2>
        <div className="flex items-center justify-center space-x-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="space-y-4 flex flex-col items-center justify-center">
        <h2 className="text-center uppercase text-lg text-blue-900 font-semibold">Inputs</h2>
        <div className="flex flex-col items-center justify-center w-1/2 space-y-4">
          <TextField placeholder="Placeholder" />
          <div className="w-full">
            <Label htmlFor="label">With label</Label>
            <TextField
              id="label"
              placeholder="Placeholder"
            />
          </div>
          <TextField
            disabled
            placeholder="Placeholder"
          />
        </div>
      </div>

      <div>
        <h2 className="text-center uppercase text-lg text-blue-900 font-semibold">Sheets</h2>
        <div className="flex items-center justify-center mt-4">
          <Button onClick={showSheet}>Open</Button>
        </div>
        <Sheet
          active={active}
          hideSheet={hideSheet}
        />
      </div>
    </div>
  );
}
