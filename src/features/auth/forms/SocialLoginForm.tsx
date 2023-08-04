import Button from '@/components/Button';

export default function SocialLoginForm() {
  return (
    <div className="space-y-4">
      <h2 className="uppercase font-semibold text-center text-gray-500">Or sign in with</h2>
      <Button
        variant="secondary"
        className="w-full uppercase"
      >
        Google
      </Button>
    </div>
  );
}
