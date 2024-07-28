import type { Metadata } from "next";
import { CustomProvider } from "rsuite";
import fa_IR from "rsuite/locales/fa_IR";
import { Toaster } from "react-hot-toast";

import "rsuite/dist/rsuite-rtl.min.css";
import "swiper/css";
import "./globals.css";
import "@/assets/css/style.css";
import "@/assets/fonts/keenicons/icon.css";
import "@/assets/fonts/ERPyb/ERPyb.css";

import ReduxProvider from "@/providers/Redux.Provider";

export const metadata: Metadata = {
  title: "سامانه جریان",
  description: "سامانه جریان",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <CustomProvider locale={fa_IR} rtl>
          <ReduxProvider>{children}</ReduxProvider>
        </CustomProvider>
        <Toaster />
      </body>
    </html>
  );
}
