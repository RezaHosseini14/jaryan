import type { Metadata } from "next";
import DashboardLayouts from "../layouts/Dashboard.Layouts";
import { CustomProvider } from "rsuite";
import fa_IR from "rsuite/locales/fa_IR";
import "./globals.css";
import "@/assets/css/style.css";
import "@/assets/fonts/keenicons/icon.css";
import "@/assets/fonts/ERPyb/ERPyb.css";
import "rsuite/dist/rsuite-rtl.min.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export const metadata: Metadata = {
  title: "سامانه جریان",
  description: "سامانه جریان",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <CustomProvider locale={fa_IR} rtl>
          {/* <Provider store={store}> */}
          {children}
          {/* </Provider> */}
        </CustomProvider>
      </body>
    </html>
  );
}
