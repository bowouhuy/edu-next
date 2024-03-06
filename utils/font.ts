import { Inter, Poppins } from "next/font/google";

const inter = Inter({
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export { inter, poppins };
