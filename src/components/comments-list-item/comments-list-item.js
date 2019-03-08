import React, { Component }  from 'react';

import './comments-list-item.css';

export default class CommentsListItem extends Component {

  render() {
    const { comment, name, date } = this.props;
    return (
      <div className="comments-list-item">
        <span className="font_l name">{name}</span>
        <span className="font_es date">{date}</span>
        <div className="comment">
          <p>{comment}</p>
        </div>
      </div>
    );
  }

};

