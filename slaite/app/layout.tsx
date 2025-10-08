import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import logo from "./logo8.png"; // Adjust path to your logo
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Slaite - Resume Builder",
  description: "Create and edit professional resumes with Slaite’s credit-based system",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className=" border flex bg-[#030303] h-[100px] w-full items-center relative z-20">
              <div className="flex items-center">
                <Image
                  className="m-[10px]"
                  src={logo}
                  alt="Slaite Logo"
                  width={60}
                  height={60}
                />
                <h1 className="font-bold ml-[0px] text-[35px] text-white">Slaite</h1>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center space-x-6 text-[#929292] font-medium">
                <a href="/about">About</a>
                <a href="/help">Help</a>
                <a href="/contact">Contact</a>
              </div>
              <div className="ml-auto flex items-center space-x-4 mr-4">
                <SignedOut>
                  <SignInButton>
                    <button className="border bg-transparent text-[#929292] font-medium rounded-[10px] text-sm sm:text-base h-10 px-4 cursor-pointer hover:text-white">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="bg-[#ffffff] text-black rounded-[10px] font-medium text-sm sm:text-base h-10 px-4 cursor-pointer">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-10 h-10",
                      },
                    }}
                  />
                </SignedIn>
              </div>
            </header>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}