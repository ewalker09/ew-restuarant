import React, {useState} from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from './menu-items';
import logo from "./logo.jpg";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);

    if(category === "all") {
      setMenuItems(items)
      return;
    };

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);

  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Early Bird Menu</h2>
        <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu
          items={menuItems}
        />
      </section>
    </main>
  );
};

export default App;
