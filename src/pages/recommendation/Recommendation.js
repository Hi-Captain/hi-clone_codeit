import React, { Component } from 'react';
import './Recommendation.scss';

class Recommendation extends Component {
  componentDidMount(){
    this._SetRecomPage()
  }

  componentWillUnmount(){
    this._SetRecomPage()
  }

  render() {
    return (
      <div className="recommendation">
        <h1>Step 1</h1>
        <div className="step-circle">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="question">왜 프로그래밍을 배우고 싶으신가요?</div>
        <div className="options-container">
          <div className="option"><div className="option1"/><p>소프트웨어 분야에서 일을 하고 싶어요!</p></div>
          <div className="option"><div className="option2"/><p>내 아이템으로 창업을 하고 싶어요!</p></div>
          <div className="option"><div className="option3"/><p>내 업무에 프로그래밍을 활용하고 싶어요!</p></div>
          <div className="option"><div className="option4"/><p>미래를 위해 교양으로 공부하고 싶어요!</p></div>
        </div>
        <button className="btn-next">다음</button>
      </div>
    );
  }

  _SetRecomPage = () => {
    document.querySelector('.navbar').classList.toggle('transparent');
    document.querySelector('.footer').classList.toggle('border-none');
  }
}

export default Recommendation;
