import './globals.css';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import SideNav from '@/features/navigations/SideNav';

export const metadata: Metadata = {
  title: 'Admin App',
  description: 'Home page of the admin page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className="w-full">
          <SideNav />
          <div className="p-5 md:ml-80">{children}</div>
        </div>
      </body>
    </html>
  );
}
