'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";

const links: { href: Route; label: string }[] = [
  { href: "/" as Route,        label: "Accueil" },
  { href: "/menu" as Route,    label: "Menu" },
  { href: "/histoire" as Route,label: "L’histoire" },
  { href: "/avis" as Route,    label: "Avis client" },
  { href: "/contact" as Route, label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="header" role="banner">
      <a className="skip-link" href="#main">Aller au contenu</a>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'.5rem'}}>
        <Link href={"/" as Route} aria-label="Retour à l’accueil">
          <img src="/images/logo-l-atelier-des-gourmets.png" alt="L’atelier des Gourmets" width={140} height={40} />
        </Link>
        <nav aria-label="Navigation principale">
          <ul>
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} aria-current={pathname === l.href ? "page" : undefined}>
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
