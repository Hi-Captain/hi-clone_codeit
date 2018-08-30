import React, { Component } from 'react';
import './LoginSignup.scss';

class LoginSignup extends Component {
  componentDidMount(){
    this._SetHeaderFooter()
  }

  componentWillUnmount(){
    this._SetHeaderFooter()
  }

  render() {
    return (
    <div className="loginSignup">
      <div className="LS-container">
        <div className="LS-left">
          <div className="LS-logo"/>
          <h2>
          코딩이 쉬워지는 주문, 코드잇!
          </h2>
          <div className="point"><div className="icon1"/><p>프로그래밍을 배우고 싶은데 너무 어렵고 어떻게 시작할지 막막하다면? <b>쉽고 재미있는 강의로 부담없이 시작하세요.</b></p></div>
          <div className="point"><div className="icon2"/><p>학원 강의도 듣고 책도 열심히 봤지만, 막상 코드를 짜는 것이 어렵다면? <b>코드잇은 스스로 생각하는 법을 가르칩니다.</b></p></div>
          <div className="point"><div className="icon3"/><p>향후 데이터 분석, 웹, 모바일 어플 개발 등 IT계열의 진로를 생각하고 있다면? <b>다양한 프로젝트와 과제로 실력을 향상시키세요!</b></p></div>
        </div>
        <div className="LS-right">
          {this.props.children}
        </div>
      </div>
    </div>
    );
  }

  _SetHeaderFooter = () => {
    document.querySelector('.navbar').classList.toggle('transparent');
    document.querySelector('.footer').classList.toggle('hidden');
  }
}

export default LoginSignup;
