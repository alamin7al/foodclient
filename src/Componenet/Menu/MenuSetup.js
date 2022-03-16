import React, { useState } from 'react';
import Categorys from './Categorys';
import Menu from './Menu';
import menu from './menudata';
import '../all.css'
// import { useHistory } from 'react-router-dom';
// import Menubuy from './Menubuy';
// import { useLocation } from 'react-router-dom';

const allCategory = ['all', ...new Set(menu.map((item) => item.category))]
const MenuSetup = () => {
  // const location = useLocation()
  // const history = useHistory()

  const [menuItems, setMenuItems] = useState(menu)
  const [category, setCategory] = useState(allCategory)
  const [cart, setCart] = useState([])

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    console.log(newItems);
    setMenuItems(newItems)
  }
 
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu  {cart.length} </h2>
          <div className="underlines"></div>
        </div>
        <Categorys category={category} filterItems={filterItems} />
        <Menu menu={menuItems} />
      
      </section>
    </main>
  );
};

export default MenuSetup;