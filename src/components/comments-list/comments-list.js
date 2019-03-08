import React from 'react';

import './comments-list.css';
import CommentsListItem from '../comments-list-item';

const CommentsList = ( { comments } ) => {

  const elements = comments.map((item) => {
    const {id, ...itemProps } = item;

    return (
      <li key={id}>
        <CommentsListItem {...itemProps} />
      </li>
    );
  });

  return (
    <ul className="comments-list">
      {elements}
    </ul>
  );
};

export default CommentsList;