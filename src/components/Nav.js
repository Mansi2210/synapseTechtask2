import React from 'react';
import './Nav.css';
import HamDraw from './HamDraw';

const Nav = ( {setCat}) => {
  return (
    <div className='nav'>
      <div className='icon'>
        <HamDraw setCat={setCat}></HamDraw>
      </div>
      <img src='https://www.iconbunny.com/icons/media/catalog/product/1/6/160.1-news-icon-iconbunny.jpg' height={70} alt=''></img>
    </div>
  )
}

export default Nav;
