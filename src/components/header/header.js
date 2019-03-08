import React from 'react';

import './header.css';
import avatar from '../../assets/img/avatar.png';

const Header = () => {

  const name = "Вероника Ростова";
  const position = "Менеджер по продажам";

  return (
    <div className="header">
      <div className="header__content d-flex">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="header__description">
          <h2 className="name padding_left font_l">{name}</h2>
          <span className="working-position padding_left">{position}</span>
          <p className="features padding_left">
            Подберу для вас самые лучшие предложения.<br/>
            Мои услуги абсолютно бесплатны
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;