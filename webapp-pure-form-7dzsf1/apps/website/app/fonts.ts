import {
  Abhaya_Libre,
  Advent_Pro,
  Afacad,
  ADLaM_Display,
  Aboreto,
  Abyssinica_SIL,
  AR_One_Sans,
  ABeeZee,
  Akatab,
  Akaya_Telivigala,
  Aguafina_Script,
} from "next/font/google";
export const abhayaLibre = Abhaya_Libre({
  subsets: ["latin", "latin-ext", "sinhala"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  variable: "--font-abhaya-libre",
  display: "swap",
});
export const adventPro = Advent_Pro({
  subsets: ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-advent-pro",
  display: "swap",
});
export const afacad = Afacad({
  subsets: [
    "cyrillic-ext",
    "latin",
    "latin-ext",
    "math",
    "symbols",
    "vietnamese",
  ],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-afacad",
  display: "swap",
});
export const adlamDisplay = ADLaM_Display({
  subsets: ["adlam", "latin", "latin-ext"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-adlam-display",
  display: "swap",
});
export const aboreto = Aboreto({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-aboreto",
  display: "swap",
});
export const abyssinicaSil = Abyssinica_SIL({
  subsets: ["ethiopic", "latin", "latin-ext"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-abyssinica-sil",
  display: "swap",
});
export const arOneSans = AR_One_Sans({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-ar-one-sans",
  display: "swap",
});
export const abeezee = ABeeZee({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-abeezee",
  display: "swap",
});
export const akatab = Akatab({
  subsets: ["latin", "latin-ext", "tifinagh"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  variable: "--font-akatab",
  display: "swap",
});
export const akayaTelivigala = Akaya_Telivigala({
  subsets: ["latin", "latin-ext", "telugu"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-akaya-telivigala",
  display: "swap",
});
export const aguafinaScript = Aguafina_Script({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-aguafina-script",
  display: "swap",
});
