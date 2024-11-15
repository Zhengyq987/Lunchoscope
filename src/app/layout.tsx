'use client';
import { UserProvider } from "@/Context/userAuth";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">

      <body>
        <UserProvider>
          <SessionProvider>
            <ToastContainer />
            {children}
          </SessionProvider>
        </UserProvider>
      </body>
    </html>
  )
}
