import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShopItemFunc from './ShopItemFunc';
import reportWebVitals from './reportWebVitals';
import ImgItem from './item.png'

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <img className="img__card-item" src={ImgItem}/>
    <ShopItemFunc item={item}/>
  </React.StrictMode>
);

reportWebVitals();
