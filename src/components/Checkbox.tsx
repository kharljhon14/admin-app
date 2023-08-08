import Label from './Label';
import { ChangeEventHandler } from 'react';

interface Props {
  name: string;
  label?: string;
  labelOnTheLeft?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Checkbox({
  name,
  label,
  labelOnTheLeft = false,
  checked,
  onChange,
}: Props) {
  return (
    <div className="flex items-center space-x-2">
      {!labelOnTheLeft && (
        <Label
          htmlFor={name}
          className="select-none"
        >
          {label}
        </Label>
      )}
      <input
        id={name}
        name={name}
        onChange={onChange}
        type="checkbox"
        checked={checked}
        className="h-4 w-4"
      />
      {labelOnTheLeft && (
        <Label
          htmlFor={name}
          className="select-none"
        >
          {label}
        </Label>
      )}
    </div>
  );
}
