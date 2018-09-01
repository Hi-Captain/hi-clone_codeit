import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Schools.scss';

class Schools extends Component {
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
      <div className="schools">
        <header>
          <h1>더 많은 수업을, 더 낮은 가격에</h1>
          <h2>어차피 들어야 하는 수업이 여러개라면?<br/>스쿨 과정으로 할인된 가격에 수강해보세요!</h2>
        </header>
        <div className="schools__container">
          <div className="school">
            <h3>
              <span>웹 프론트엔드 개발 스쿨</span>
              <div className="deco-bar"></div>
            </h3>
            <div className="school-info">
              <div className="basic">
                <div className="basic-description">
                  HTML/CSS와 JavaScript 강좌를 통해 인터랙티브 웹 프론트엔드 개발을 배울 수 있습니다. 다양한 프로젝트를 통해 실력을 쌓고, 멋진 웹 프론트엔드 개발자가 되어보세요!
                </div>
                <div className="basic-prereq">
                  <div className="book-icon"/> 선이수 과목<br/>
                  <span>없음</span>
                </div>
              </div>
              <ul className="course-list">
                  <li>
                    <div className="course-info">
                      <div className="title">Python으로 배우는 &#39;프로그래밍 기초&#39;</div>
                      <div className="duration">3개월 기준</div>
                    </div>
                  </li>
                  <li>
                    <div className="course-info">
                      <div className="title">HTML/CSS로 배우는 &#39;웹 퍼블리싱&#39;</div>
                      <div className="duration">3개월 기준</div>
                    </div>
                  </li>
                  <li>
                    <div className="course-info">
                      <div className="title">JavaScript로 배우는 &#39;인터랙티브 웹&#39;</div>
                      <div className="duration">3개월 기준</div>
                    </div>
                  </li>
              </ul>
            </div>
            <div className="prices">
              <div className="original-price">387,000원</div>
              <div className="right">
                <div className="new-price">267,000원</div>
                <div className="monthly-price">(29,666
                  원 / 1개월)
                </div>
              </div>
            </div>
            <div className="discount"><b>12만원</b><br/>할인</div>
          </div>
          <div className="school">
            <h3>
              <span>기수강생 웹 프론트엔드 개발 스쿨</span>
              <div className="deco-bar"></div>
            </h3>
            <div className="school-info">
              <div className="basic">
                <div className="basic-description">
                  Python 강좌를 들은 기수강생 분들을 위한 웹 프론트엔드 개발 스쿨입니다. 다양한 프로젝트를 통해 실력을 쌓고, 멋진 웹 프론트엔드 개발자가 되어보세요!
                </div>
                <div className="basic-prereq">
                  <div className="book-icon"/> 선이수 과목<br/>
                  <span>Python으로 배우는 &#39;프로그래밍 기초&#39;</span>
                </div>
              </div>
              <ul className="course-list">
                  <li>
                    <div className="course-info">
                      <div className="title">HTML/CSS로 배우는 &#39;웹 퍼블리싱&#39;</div>
                      <div className="duration">3개월 기준</div>
                    </div>
                  </li>
                  <li>
                    <div className="course-info">
                      <div className="title">JavaScript로 배우는 &#39;인터랙티브 웹&#39;</div>
                      <div className="duration">3개월 기준</div>
                    </div>
                  </li>
              </ul>
            </div>
            <div className="prices">
              <div className="original-price">258,000원</div>
              <div className="right">
                <div className="new-price">178,000원</div>
                <div className="monthly-price">(29,666
                  원 / 1개월)
                </div>
              </div>
            </div>
            <div className="discount"><b>8만원</b><br/>할인</div>
          </div>
        </div>
        <div className="schools__faq">
          <h3>FAQ</h3>
          <div className="faq-container">
            <div className="panel">
              <div className="question">
                <h4>스쿨 과정의 경우, 수강 기간이 과목별로 각각 3개월가요?</h4>
              </div>
              <div className="answer">
                <p>네, 맞습니다. 모든 과정 통틀어서 3개월이 아니라, 과목별로 각각 3개월의 수강 기간이 주어집니다. 그리고 각 수업은 원하시는 때에 맞추어 시작하실 수 있습니다. 예를 들어, ‘웹 프론트엔드 개발 스쿨’을 신청한 경우, Python 수업을 1월부터, HTML 수업을 5월부터, JavaScript 수업을 8월부터 각각 3개월씩 수강하시는 것이 가능합니다.</p>
              </div>
            </div>
            <div className="panel">
              <div className="question">
                <h4>스쿨 과정의 경우, 환불이 가능한가요?</h4>
              </div>
              <div className="answer">
                <p>스쿨 과정과 같이 할인/기간 연장 등 별도의 이벤트가 적용되는 경우, 환불이 불가능합니다.</p>
              </div>
            </div>
            <div className="panel">
              <div className="question">
                <h4>코드잇 강의의 목표는 무엇인가요?</h4>
              </div>
              <div className="answer">
                <p>고액의 학원을 다니고 몇년째 개발자로 일하고 계신 분들이 아주 기본적인 알고리즘 문제도 못 푸는 모습을 보고 충격을 받았습니다. 현재 한국의 프로그래밍 교육은 자격증이나 문법을 위주로 다루고, 사실상 가장 중요한 문제 해결 능력은 가르쳐주지 않기 때문에 이런 상황을 흔히 볼 수 있었던 거죠.<br/>코드잇 수업의 목표는, 이 시대에 꼭 필요한 프로그래밍과 컴퓨터적인 사고력을 기르는 것입니다. 코드잇이 추천하는 과정을 따라 수업을 이수하면, 풀스텍 웹 개발, 모바일 어플 개발, 데이터 분석, 업무자동화 등 어떠한 분야로도 나아가실 수 있습니다.</p>
              </div>
            </div>
            <div className="panel">
              <div className="question">
                <h4>수업 기간은 연장할 수 있나요?</h4>
              </div>
              <div className="answer">
                <p>대부분의 경우 3개월이면 여유롭게 수업을 이수하실 수 있습니다. 중간에 바쁜 사정이 있으면 바로 아래 질문에 있는 '중도 휴학 제도'를 활용해보세요! 만약 3개월 내에 다 끝내지 못하면, 1개월 단위로 연장할 수 있습니다!</p>
              </div>
            </div>
            <div className="panel">
              <div className="question">
                <h4>중간에 휴학도 가능한가요?</h4>
              </div>
              <div className="answer">
                <p>각 과목별로 1회에 한하여 중도 휴학을 할 수 있습니다. 휴학 가능 기간은 최대 4주입니다. 휴학 후 4주가 지나면, 자동으로 수업이 시작되며 수강 가능일이 차감됩니다. 강의를 듣는 도중 바쁘신 분들은, 휴학 제도를 이용해주시기 바랍니다.</p>
              </div>
            </div>
          </div>
          <div className="faq-btn">
            <Link to='/faq'>FAQ 더 보기</Link>
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

export default Schools;
