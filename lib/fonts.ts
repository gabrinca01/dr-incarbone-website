import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

export const miranoExtended = localFont({
  src: [
    {
      path: "../fonts/Miranoextended Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Miranoextended Lightitalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Miranoextended Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Miranoextended Regularitalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Miranoextended Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Miranoextended Mediumitalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/Miranoextended Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Miranoextended Bolditalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-mirano",
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
