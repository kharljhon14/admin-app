import Button from '@/components/Button';
import Label from '@/components/Labels';
import TextField from '@/components/TextField';

export default function TestPage() {
  return (
    <div className="bg-blue-100 h-screen space-y-4">
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
    </div>
  );
}
