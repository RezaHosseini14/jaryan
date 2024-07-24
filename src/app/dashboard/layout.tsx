import type { Metadata } from "next";
import DashboardLayouts from "../../layouts/Dashboard.Layouts";

export const metadata: Metadata = {
  title: "داشبورد",
  description: "داشبورد",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <DashboardLayouts>{children}</DashboardLayouts>
      </body>
    </html>
  );
}
