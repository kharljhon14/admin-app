import Button from '@/components/Button';

interface Props {
  handleGoogleLogin: () => Promise<void>;
}

export default function SocialLoginForm({ handleGoogleLogin }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="uppercase font-semibold text-center text-gray-500">Or sign in with</h2>
      <Button
        onClick={handleGoogleLogin}
        variant="secondary"
        className="w-full uppercase"
      >
        Google
      </Button>
    </div>
  );
}
