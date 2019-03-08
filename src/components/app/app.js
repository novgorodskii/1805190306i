import React, { Component } from 'react';

import Header from '../header';
import Services from '../services';
import Reviews from '../reviews';
import CommentsList from '../comments-list';
import CommentsAddForm from '../comments-add-form';

import './app.css';

export default class App extends Component {
  maxId = 100;
  state = {
    commenstData: [
      this.createComment('Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?')
    ]
  };

  creacteDate() {
    const d = new Date();
    const monthA =
          'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'
          .split(',');
    return ` ${d.getDate()} ${monthA[d.getMonth()]} ${d.getFullYear()}`;
  }

  createComment(comment){
    return {
      comment,
      name: 'Иван Иванов',
      date: this.creacteDate(),
      id: this.maxId++
    }
  };

  addComment = (text) => {
    const newItem = this.createComment(text);

    this.setState(({commenstData}) => {
      const newArr = [
        ...commenstData,
        newItem
      ];

      return {
        commenstData: newArr
      }
    });
  }

  render() {

    const { commenstData } = this.state;

    return (
      <div className="app">
        <div className="container">
          <Header />
          <Services />
          <Reviews />
          <CommentsList comments={commenstData} />
        </div>
        <CommentsAddForm onItemAdd={this.addComment} />
      </div>
    );
  };
}