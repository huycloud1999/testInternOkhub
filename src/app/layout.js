import "./globals.css";
import localFont from "@next/font/local";
import { Poppins } from "@next/font/google";

export const metadata = {
  title: "HA GIANG LOOP TOUR",
  description: "HA GIANG LOOP TOUR",
  icons: {
    icon: "/logo.png",
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const tomatoes = localFont({
  src: [
    {
      path: "../../public/fonts/Tomatoes.ttf",
    },
  ],
  variable: "--font-tomatoes",
});
const heavitas = localFont({
  src: [
    {
      path: "../../public/fonts/Heavitas.ttf",
    },
  ],
  variable: "--font-heavitas",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${tomatoes.variable} ${heavitas.variable} ${poppins.className}  `}
    >
      <body>{children}</body>
    </html>
  );
}
