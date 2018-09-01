import React, { Component } from 'react';
import './Reviews.scss';
import axios from 'axios';

class Reviews extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviews : [],
      thisPage: 1,
      lastPage: 0,
      isFirst: true,
      isLast: false
    }
  }

  componentDidMount() {
    const {thisPage} = this.state
    window.scrollTo(0, 0)
    window.addEventListener('scroll', this._ScrollNav);
    axios.get("./data.json")
    .then(response => {
      const reviews_data = response.data.reviews,
            view_reviews = reviews_data.slice((thisPage-1)*5, thisPage*5);
      this.setState({
        reviews : view_reviews,
        lastPage : Math.round(reviews_data.length / 5),
        isLast : thisPage*5 >= reviews_data.length ? true : false,
      })
    })
    .catch( err => {console.log(err)});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._ScrollNav);
    document.querySelector('.navbar').classList.add('transparent')
  }

  render() {
    const { thisPage, lastPage, reviews, isFirst, isLast } = this.state;
    const maping = reviews.map((value, i) => {
      return (
        <div className="review" key={i}>
          <div className="review-profile"/>
          <div className="review-header">
            <div className="reviewer">
              <span className="name">{value.name}</span>
              <span className="date">{value.date}</span>
            </div>
            <div className="reviewed-course">
              {value.course}
            </div>
            <div className="stars">
              <span className="star"/>
              <span className="star"/>
              <span className="star"/>
              <span className="star"/>
              <span className="star"/>
            </div>
          </div>
          <p className="review-content">{value.content}</p>
        </div>
      )
    })
    return (
      <div className="reviews">
        <header>
          <h1>코드잇과 함께한 많은 사람들</h1>
          <h2>비전공자도 쉽게 배울 수 있는 최고의 프로그래밍 교육.<br/>여러분도 함께 하실래요?</h2>
        </header>
        <div className="carousel">
          <div className="carousel__item">
            <p className="carousel__item-content">“배경이 전혀 없는 저에게 정말 유용한 입문용 강좌였습니다. 필수적인 요소들만 가르쳐주고 무엇보다 피드백 시스템이 제대로 갖춰져 있는 것이 큰 장점입니다!”</p>
            <div className="carousel__item-img"></div>
            <div className="carousel__item-name">- 이준호 (프로그래밍 기초)</div>
            <div className="carousel__item-star">
              <span className="star"/>
              <span className="star"/>
              <span className="star"/>
              <span className="star"/>
              <span className="star"/>
            </div>
            <div className="carousel__item-left"><div className="arrow"/></div>
          <div className="carousel__item-right"><div className="arrow"/></div>
          </div>
        </div>
        <div className="all-reviews">
          <div className="summary">
            <div className="average">
              <div className="score">4.9</div>
              <div className="stars">
                <span className="star"/>
                <span className="star"/>
                <span className="star"/>
                <span className="star"/>
                <span className="star"/>
                <span className="number">(181)</span>
              </div>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="label">5점</span>
                <div className="bar"><div className="bar__inner point5"/></div>
                <span className="percentage">89%</span>
              </div>
              <div className="stat">
                <span className="label">4점</span>
                <div className="bar"><div className="bar__inner point4"/></div>
                <span className="percentage">11%</span>
              </div>
              <div className="stat">
                <span className="label">3점</span>
                <div className="bar"><div className="bar__inner point3"/></div>
                <span className="percentage">0%</span>
              </div>
              <div className="stat">
                <span className="label">2점</span>
                <div className="bar"><div className="bar__inner point2"/></div>
                <span className="percentage">0%</span>
              </div>
              <div className="stat">
                <span className="label">1점</span>
                <div className="bar"><div className="bar__inner point1"/></div>
                <span className="percentage">0%</span>
              </div>
            </div>
          </div>
          <div className="review__container">
            {maping}
            <div className="review-btn">
              <button onClick={isFirst ? null : this._prevPage}><div className="img prev"/></button>{thisPage} of {lastPage}<button onClick={isLast ? null : this._nextPage}><div className="img next"/></button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _nextPage = () => {
    window.scrollTo(0, 610)
    const {thisPage} = this.state
    axios.get("./data.json")
    .then(response => {
      const reviews_data = response.data.reviews,
            view_reviews = reviews_data.slice(thisPage*5, (thisPage+1)*5);
      this.setState({
        reviews : view_reviews,
        thisPage : thisPage + 1,
        isFirst : false,
        isLast : (thisPage + 1)*5 >= reviews_data.length ? true : false,
      })
    })
    .catch( err => {console.log(err)});
  }

  _prevPage = () => {
    window.scrollTo(0, 610)
    const {thisPage} = this.state
    axios.get("./data.json")
    .then(response => {
      const reviews_data = response.data.reviews,
            view_reviews = reviews_data.slice((thisPage-2)*5, (thisPage-1)*5);
      this.setState({
        reviews : view_reviews,
        thisPage : thisPage-1,
        isFirst : thisPage-1 === 1 ? true : false,
        isLast : false,
      })
    })
    .catch( err => {console.log(err)});
  }

  _ScrollNav = () => {
    let el = document.querySelector('.navbar').classList
    window.scrollY > 0 ? el.remove('transparent') : el.add('transparent')
  };
}

export default Reviews;
