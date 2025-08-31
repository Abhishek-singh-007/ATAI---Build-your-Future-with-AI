import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ATAI",
  description: "ATAI - Build. Learn. Succeed.",
  icons: {
    icon: "./ATAII.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={` ${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            {/* Updated Footer */}
            <footer className="bg-background py-6 flex justify-center">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-gray-300 space-y-3 md:space-y-0 md:space-x-6">
                {/* Footer Text */}
                <p className="text-lg font-semibold tracking-wide flex items-center">
                  Created by{" "}
                  <a
                    href="https://my-portfolio-six-tau-59.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold ml-1 hover:text-blue-400 transition-colors"
                  >
                    AbhiTech
                  </a>
                </p>

                {/* Social Icons */}
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Abhishek-singh-007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-sky-400 transition-transform transform hover:scale-110"
                  >
                    <FaGithub size={26} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek-singh1024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-110"
                  >
                    <FaLinkedin size={26} />
                  </a>
                  <a
                    href="https://x.com/Im__abhi_007?t=SgoMsp0a4Azb0QFLTN2GCA&s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-sky-400 transition-transform transform hover:scale-110"
                  >
                    <FaTwitter size={26} />
                  </a>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
