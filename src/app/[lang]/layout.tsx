import Footer from "@/comps/Footer";
import Header from "@/comps/Header";
import {ReactNode} from "react";

interface LangLayP{
    children: ReactNode;
    params: { lang: string};
}
export default async function LangLayout({ children, params }: LangLayP) {
      let { lang } = await params;
      ["ar", "fr"].includes(lang) ? null : lang = "fr";
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
