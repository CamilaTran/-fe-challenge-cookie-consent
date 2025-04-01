import { Noto_Sans, Inter } from "next/font/google";

const notoFont = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});


export { notoFont, interFont };