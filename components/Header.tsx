'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Route } from "next";

const links: { href: Route; label: string }[] = [
  { href: "/" as Route, label: "Accueil" },
  { href: "/menu" as Route, label: "Menu" },
  { href: "/histoire" as Route, label: "L’histoire" },
  { href: "/avis" as Route, label: "Avis client" },
  { href: "/contact" as Route, label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="header" role="banner">
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: ".75rem",
          position: "relative",
        }}
      >
        <Link href={"/" as Route} aria-label="Retour à l’accueil" onClick={close}>
          <img
            src="/images/logo-l-atelier-des-gourmets.png"
            alt="L’atelier des Gourmets"
            width={140}
            height={40}
          />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          aria-label="Navigation principale"
          className={`site-nav ${open ? "is-open" : ""}`}
        >
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  onClick={close}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
