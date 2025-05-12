import MainLayout from "@/components/layout/MainLayout";
import "./globals.css";

export const metadata = {
  title: "Collegeonn | Explore Top Colleges in India",
  description:
    "Compare colleges, explore exams, and stay updated with education news.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
