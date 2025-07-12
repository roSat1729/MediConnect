import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import { Twitter, Github, Linkedin } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctors Appointment App",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-10 mt-16">
              <div className="container mx-auto px-4 text-center text-gray-300 space-y-4">
                <p>
                  Made with 💗 by{" "}
                  <span className="text-emerald-400 font-semibold">
                    MediConnect Team
                  </span>
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="hover:text-emerald-400"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/roSat1729"
                    target="_blank"
                    className="hover:text-emerald-400"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/satyam-kr-4968b7211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    className="hover:text-emerald-400"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-s">
                  © {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
