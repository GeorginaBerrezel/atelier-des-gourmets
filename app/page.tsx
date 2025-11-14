import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Atelier des Gourmets</h1>
          <p>Restaurant à Ayent. Cuisine de saison, pizzas et plats du jour. Réservation par téléphone.</p>
          <p><Link className="btn" href="/menu">Voir le menu</Link></p>
        </div>
        <div className="card">
          <Image
          src="/images/cover-l-atelier-des-gourmets.jpeg"
          alt="Salle du restaurant à Ayent"
          width={1200}
          height={800}
          priority
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{ width: "100%", height: "auto" }}
        />
        </div>
      </section>

      <section className="grid" aria-labelledby="sections">
        <h2 id="sections" className="visually-hidden">Sections principales</h2>
        <article className="card">
          <h3>Entrées</h3>
          <p>Produits frais, recettes de saison.</p>
        </article>
        <article className="card">
          <h3>Plats</h3>
          <p>Classiques revisités et spécialités de la maison.</p>
        </article>
        <article className="card">
          <h3>Pizzas</h3>
          <p>Pâte maison, cuisson soignée.</p>
        </article>
      </section>

      <section className="card" aria-labelledby="adresse">
        <h2 id="adresse">Adresse</h2>
        <p><strong>Route de Botyre 30 – 1966 Ayent</strong></p>
        <p>Téléphone : <a href="tel:+41273981496">+41 27 398 14 96</a></p>
        <div className="card" style={{padding:0}} aria-label="Carte Google Maps intégrée">
          <iframe
            title="Itinéraire vers L’atelier des Gourmets"
            width="100%" height="360" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Route%20de%20Botyre%2030%2C%201966%20Ayent&output=embed">
          </iframe>
        </div>
      </section>
    </>
  );
}
