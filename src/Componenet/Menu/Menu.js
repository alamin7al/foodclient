import React from 'react';
import { Link } from 'react-router-dom';


const Menu = ({ menu }) => {

  return (
    <div className='section-center'>
      {menu.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>

                <h4>{title}</h4>

                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc.slice(0,90)}...</p>
              <div className='text-start'>
              <Link to={`/menubuy/${id}`}>
                  <button className='button-8 m-0 px-5 '>Buy</button>

                </Link> 
                {/* <button  className='button-8 m-0 px-5 '>Buy</button> */}

              </div>
            </div>
          </article>
        );
      })}
    </div>

  );
};

export default Menu;