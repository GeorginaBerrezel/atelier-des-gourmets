import "../../styles/menus.css";
import menuData from "../../data/menu.json";
import MenuView from "../../components/MenuView";

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <main className="menu-wrap container" id="main">
      <header className="menu-hero">
        <h1>Carte & Menus</h1>
        <p>Photos indicatives. Prix sujets à modification.</p>
      </header>

      <MenuView categories={menuData.categories} />
    </main>
  );
}
