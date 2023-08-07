import AuthProvider from "./components/AuthProvider/AuthProvider";
import Minicart from "./components/Checkout/Minicart/Minicart";
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import CartProvider from "./context/CartProvider";
import UiProvider from "./context/UiProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exhibit | Level up your style",
  description:
    "Discover the latest fashion trends and level up your style. Shop our clothing range and enjoy discounts on selected items.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <UiProvider>
              <Toaster position="top-center" reverseOrder={false} />
              <Header />
              <Minicart />
              <main>{children}</main>
              <Footer />
            </UiProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
