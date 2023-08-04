import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin App',
  description: 'Home page of the admin page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
