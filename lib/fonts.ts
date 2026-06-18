import localFont from "next/font/local";

/**
 * Mirano Extended — primary brand typeface.
 * Available files: Light, Regular, Medium, Bold (+ italics).
 * Weights 600 / 800 / 900 map to the nearest optical file for hierarchy.
 */
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
      path: "../fonts/Miranoextended Medium.ttf",
      weight: "600",
      style: "normal",
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
    {
      path: "../fonts/Miranoextended Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Miranoextended Bold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mirano",
  display: "swap",
});
