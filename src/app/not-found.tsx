"use client";

import Link from "next/link";
import {Locale, translations} from "@/lib/locales";
interface p{
    params: { lang: string }
}
export default function NotFound({
  params,
}: p ) {
    const { lang } = params ?? "ar"
  const t = translations[lang as Locale] || translations.fr;

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "70px", marginBottom: "10px" }}>404</h1>

      <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
        {t.f04.title}
      </h2>

      <p style={{ maxWidth: "500px", marginBottom: "30px", opacity: 0.8 }}>
        {t.f04.desc}
      </p>

      <div
        style={{
          background: "#FEF3C7",
          padding: "20px 30px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <Link
          href={`/${lang}`}
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "#f97316",
            fontSize: "18px",
          }}
        >
          {t.f04.btn}
        </Link>
      </div>
    </div>
  );
}
