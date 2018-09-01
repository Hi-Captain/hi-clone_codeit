import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Courses.scss';

class Courses extends Component {
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
      <div className="courses">
        <header>
          <h1>무엇을 배우고 싶으신가요?</h1>
          <h2>코딩이 쉬워지는 주문, 코드잇!<br/> 코드잇의 탄탄한 커리큘럼으로 실력을 키워보세요.</h2>
        </header>
        <div className="courses__container">
          <div className="course">
            <div className="img python"/>
            <div className="info">
              <h3>프로그래밍 기초</h3>
              <h4>Python</h4>
              <p>웹/앱 개발, 데이터 분석, 인공지능/머신러닝, 업무 자동화 등으로 나아가기 위한 첫 걸음입니다. 똑똑해지는 것은 덤이지요. 입문자 분들께 추천해요!</p>
              <div className="prereq">
                <div className="book-icon"/>선이수 과목<br />
                <span>없음</span>
              </div>
              <div className="price">
                <div className="original">129,000원</div>
                <div className="discount">99,000원</div>
                <div className="monthly">(33,000원/월)</div>
              </div>
            </div>
          </div>
          <div className="course">
            <div className="img html"/>
            <div className="info">
              <h3>웹 퍼블리싱</h3>
              <h4>HTML/CSS</h4>
              <p>이 수업은 인터랙티브한 웹사이트/웹 어플리케이션을 개발하는 첫 걸음이에요. 번뜩이는 아이디어로 나만의 웹사이트를 만들어보세요!</p>
              <div className="prereq">
                <div className="book-icon"/>선이수 과목<br />
                <span>없음</span>
              </div>
              <div className="price">
                <div className="original">129,000원</div>
                <div className="discount">99,000원</div>
                <div className="monthly">(33,000원/월)</div>
              </div>
            </div>
          </div>
          <div className="course">
            <div className="img js"/>
            <div className="info">
              <h3>인터랙티브 웹</h3>
              <h4>JavaScript/jQuery</h4>
              <p>예쁘기만 한 사이트? 이제 그만! 요즘은 인터랙티브한 사이트가 대세죠~ JavaScript와 jQuery를 배우며 웹 프론트엔드 개발을 제대로 배워보세요!</p>
              <div className="prereq">
                <div className="book-icon"/>선이수 과목<br />
                <span>없음</span>
              </div>
              <div className="price">
                <div className="original">129,000원</div>
                <div className="discount">99,000원</div>
                <div className="monthly">(33,000원/월)</div>
              </div>
            </div>
          </div>
          <div className="course">
            <div className="img next"/>
            <div className="info">
              <h3>What's next?</h3>
              <p className="next">여러분이 코드잇의 주인공입니다. 직접 여러분이 다음 강의를 건의해주세요! 쉽고 재밌는 최고의 강의를 만들어가겠습니다 :)</p>
              <button>강의 건의하기</button>
            </div>
          </div>
        </div>
        <div className="courses__wadiz">
          <button>와디즈 쿠폰으로 Java 수업 듣기 쓰기</button><br/>
          <button>와디즈 쿠폰으로 iOS 수업 듣기 쓰기</button>
        </div>
        <div className="courses__faq">
          <h3>FAQ</h3>
          <div className="faq-container">
            <div className="panel">
              <div className="question">
                <h4>코드잇의 강좌는 어떤 형식으로 구성되어있나요?</h4>
              </div>
              <div className="answer">
                <p>코드잇의 강좌는 어떤 형식으로 구성되어있나요?<br />첫째, <b>동영상 강의</b>와 <b>핵심 노트</b>로 개념을 정리할 수 있습니다.<br />둘째, 배운 개념을 실습할 수 있는 <b>과제와 프로젝트</b>가 주어집니다.<br />셋째, 이를 제출하면 자동/수동으로 <b>채점과 피드백</b>을 받으실 수 있습니다.<br />넷째, 궁금하신 점은 언제든 <b>커뮤니티</b>에 질문을 올려, 동료 수강생 분들끼리 질문과 답변을 주고 받으실 수 있습니다.<br />마지막으로, 강의를 모두 마친 후 배운 내용을 응용하여 스스로 포트폴리오를 만들어보시는 것을 권장드리며, 이를 커뮤니티에 공유할 수 있습니다.<br />진도의 70% 이상을 이수하시면, 코드잇의 <b>공식 ‘수료증’</b>을 발급해드립니다.</p>
              </div>
            </div>
            <div className="panel">
              <div className="question">
                <h4>코드잇 강의의 목표는 무엇인가요?</h4>
              </div>
              <div className="answer">
                <p>고액의 학원을 다니고 몇년째 개발자로 일하고 계신 분들이 아주 기본적인 알고리즘 문제도 못 푸는 모습을 보고 충격을 받았습니다. 현재 한국의 프로그래밍 교육은 자격증이나 문법을 위주로 다루고, 사실상 가장 중요한 문제 해결 능력은 가르쳐주지 않기 때문에 이런 상황을 흔히 볼 수 있었던 거죠.<br/><b>코드잇 수업의 목표는, 이 시대에 꼭 필요한 프로그래밍과 컴퓨터적인 사고력을 기르는 것입니다.</b> 코드잇이 추천하는 과정을 따라 수업을 이수하면, 풀스텍 웹 개발, 모바일 어플 개발, 데이터 분석, 업무자동화 등 어떠한 분야로도 나아가실 수 있습니다.</p>
              </div>
            </div>
            <div className="panel">
              <div className="question">
                <h4>수업 기간은 연장할 수 있나요?</h4>
              </div>
              <div className="answer">
                <p>대부분의 경우 <b>3개월이면 여유롭게 수업을 이수</b>하실 수 있습니다. 중간에 바쁜 사정이 있으면 바로 아래 질문에 있는 <b>'중도 휴학 제도'</b>를 활용해보세요! 만약 3개월 내에 다 끝내지 못하면, <b>1개월 단위로 연장</b>할 수 있습니다!</p>
              </div>
            </div>
            <div className="panel">
              <div className="question">
                <h4>중간에 휴학도 가능한가요?</h4>
              </div>
              <div className="answer">
                <p><b>1회에 한하여 중도 휴학을 할 수 있습니다.</b> 휴학 가능 기간은 최대 4주입니다. 휴학 후 4주가 지나면, 자동으로 수업이 시작되며 수강 가능일이 차감됩니다. 강의를 듣는 도중 바쁘신 분들은, 휴학 제도를 이용해주시기 바랍니다.</p>
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

export default Courses;
