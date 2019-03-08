import React, { Component } from 'react';

import './comments-add-form.css';

export default class CommentsAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
        label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdd(this.state.label);
    this.setState({
        label: ''
    });
};

  render() {
    return (
      <div className="comments-add-form">
        <form className="container d-flex form" onSubmit={ this.onSubmit }>
          <input type="text"
          className="form-control"
          onChange={ this.onLabelChange }
          value={ this.state.label } />
          <button
            type="submit"
            className="button font_l">
            Написать консультанту
          </button>
        </form>
      </div>
    );
  }
};