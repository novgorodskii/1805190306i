import React from 'react';

import './services.css';

const Services = () => {
  return (
    <div className="services d-flex">
      <span className="title font_s">Услуг</span>
      <div className="list">
        <ul className="list__items">
          <li className="item">
            <div className="background_green"></div>
            <span>Ручное бронирование</span>
            <strong>11</strong>
          </li>
          <li className="item">
            <div className="background_blue1"></div>
            <span>Пакетные туры</span>
            <strong>3</strong>
          </li>
          <li className="item">
            <div className="background_blue2"></div>
            <span>Отели</span>
            <strong>1</strong>
          </li>
        </ul>
      </div>
      <div className="total font_l">
          <span className="padding_left">Всего</span>
          <strong className="padding_right">15</strong>
      </div>
    </div>
  );
};

export default Services;