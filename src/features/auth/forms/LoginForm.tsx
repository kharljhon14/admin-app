import Button from '@/components/Button';
import TextField from '@/components/TextField';

export default function LoginForm() {
  return (
    <div>
      <form className="space-y-4">
        <TextField placeholder="Email" />
        <TextField
          placeholder="Password"
          type="password"
        />
        <Button className="uppercase w-full">Login</Button>
      </form>
    </div>
  );
}
