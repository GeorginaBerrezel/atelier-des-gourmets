import Image from "next/image";

export type MenuItem = {
  name: string;
  desc?: string;
  price?: string;
  img?: string;
};

export default function MenuCard({ item }: { item: MenuItem }) {
  const imgSrc = item.img || "/images/menu/placeholder.svg";
  return (
    <article className="menu-card">
      <div className="thumb">
        {/* width/height fixes pour Next/Image */}
        <Image src={imgSrc} alt={item.name} width={200} height={200} />
      </div>
      <div className="meta">
        <h3 className="title">{item.name}</h3>
        {item.desc && <p className="desc">{item.desc}</p>}
      </div>
      <div className="price" aria-label="prix">{item.price || "—"}</div>
    </article>
  );
}
