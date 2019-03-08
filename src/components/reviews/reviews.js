import React from 'react';

import './reviews.css';
import heartIcon from '../../assets/img/heart_icon.png';
import commentIcon from '../../assets/img/comments_icon.png';

const Reviews = () => {
  return (
    <div className="reviews d-flex">
      <div>
        <span className="font_l">Последние отзывы</span>
        <a className="reviews__link" href="/">Все отзывы</a>
      </div>
      <div className="counter d-flex">
        <div className="d-flex counter__item">
          <div className="icon-img">
            <img src={heartIcon} alt="heart-icon" />
          </div>
          <span>131</span>
        </div>
        <div className="d-flex counter__item">
          <div className="icon-img">
            <img src={commentIcon} alt="comment-icon" />
          </div>
          <span>14</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;