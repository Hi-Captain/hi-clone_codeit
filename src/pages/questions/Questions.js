import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Questions.scss';

class Questions extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', this._ScrollNav);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._ScrollNav);
    document.querySelector('.navbar').classList.add('transparent')
  }

  render() {
    return (
      <div className="questions">
        <header>
          <h1>커뮤니티에 물어보세요</h1>
          <h2>수업을 듣다가 궁금한 점이 생기셨나요?<br/>질문을 올리고 동료 수강생들과 함께 문제를 해결해봐요.</h2>
        </header>
        <div className="questions__container">
          <div className="left">
            <div className="selects">
              <div className="select allow">선택해주세요<div className="arrow"/></div>
              <div className="select">선택해주세요<div className="arrow"/></div>
              <div className="select">선택해주세요<div className="arrow"/></div>
            </div>
            <div className="search">
              <div className="search__icon"/>
              <input type="text" className="search__input" placeholder="제목, 내용 검색하기"/>
            </div>
            <div className="btns">
              <div className="btns-wrap">
                <button className="active">최신</button>
                <button>답변 대기</button>
                <button>추천</button>
              </div>
              <Link className="new-question" to='/login'>질문하기</Link>
            </div>
            <div className="container">
              검색 결과가 없어요.<br/>
              처음으로 질문을 해보세요!
            </div>
          </div>
          <div className="right">
            <div className="ranking">
              <div className="ranking__btns">
                <button className="btn">주간 순위</button>
                <button className="btn active">전체 순위</button>
              </div>
              <div className="ranking__users">
                <div className="user gold">
                  <div className="medal"/>
                  <div className="rank">1</div>
                  <div className="profile">
                    <div className="img"/>
                    <div className="grade-wrap"><div className="grade"/></div>
                  </div>
                  <div className="user__info">
                    <div className="name">Yoonsoo Lee</div>
                    <div className="data"><div className="icon icon-like"/>353</div>
                    <div className="data"><div className="icon icon-comments"/>2195</div>
                    <div className="data"><div className="icon icon-point"/>11063</div>
                  </div>
                </div>
              </div>
            </div>
            <Link to='/courses' className="ad" />
          </div>
        </div>
      </div>
    );
  }
  _ScrollNav = () => {
    let el = document.querySelector('.navbar').classList
    window.scrollY > 0 ? el.remove('transparent') : el.add('transparent')
  };
}

export default Questions;
