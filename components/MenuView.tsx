'use client';

import MenuTabs, { Tab } from "./MenuTabs";
import MenuCard, { MenuItem } from "./MenuCard";

type Category = { id: string; label: string; items: MenuItem[] };

export default function MenuView({ categories }: { categories: Category[] }) {
  const tabs: Tab[] = categories.map((c) => ({ id: c.id, label: c.label }));

  const handleChange = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <MenuTabs tabs={tabs} onChange={handleChange} />

      <div className="sections">
        {categories.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="menu-section"
            aria-labelledby={`${section.id}-title`}
          >
            <h2 id={`${section.id}-title`}>{section.label}</h2>
            <div className="grid-cards">
              {section.items.map((it) => (
                <MenuCard key={it.name} item={it} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
