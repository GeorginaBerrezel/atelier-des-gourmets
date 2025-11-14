'use client';

import { useState, useEffect } from "react";

export type Tab = { id: string; label: string };

type Props = {
  tabs: Tab[];
  onChange: (id: string) => void;
};

export default function MenuTabs({ tabs, onChange }: Props) {
  const [active, setActive] = useState<string | undefined>(tabs[0]?.id);

  useEffect(() => {
    if (active) onChange(active);
  }, [active, onChange]);

  return (
    <div className="tabs" role="tablist" aria-label="Catégories du menu">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={active === t.id}
          className={active === t.id ? "tab active" : "tab"}
          onClick={() => setActive(t.id)}
        >
          {t.label}
          {active === t.id && (
            <span className="underline" aria-hidden="true" />
          )}
        </button>
      ))}
    </div>
  );
}
