import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Main.scss';

class Main extends Component {
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
      <div className="main" onWheel={this._countUp}>
        <header className="header">
          <div className="header__txt">
            <h1>코딩 인강? 대세는 코드잇!</h1>
            <h2>최다 수강생. 최고 졸업률. 최고 만족도.<br/> 코딩 배우고 싶으면 주저 말고 코드잇!</h2>
            <Link className="header__txt-link" to="/recommendation"><span>지금 무료로 시작하기</span><div className="icon-arrow"/></Link>
          </div>
          <div className="header__courses">
            <Link className="course" to="/courses">
              <div className="course__img python"/>
              <div className="course__info">
                <h3>프로그래밍 시작하기!</h3>
                <h4>코딩 기초/파이썬 인강 1위.<br/> 제대로 배우고 싶으면 여기서 시작!</h4>
              </div>
            </Link>
            <Link className="course" to="/courses">
              <div className="course__img html"/>
              <div className="course__info">
                <h3>웹사이트 만들기!</h3>
                <h4>사이트 안만드는 HTML 수업은 그만.<br/> 이 수업 끝내면 이미 포트폴리오 완성!</h4>
              </div>
            </Link>
            <Link className="course" to="/courses">
              <div className="course__img js"/>
              <div className="course__info">
                <h3>웹사이트를 더 멋있게!</h3>
                <h4>가만히 있는 웹사이트는 지루하다.<br/> JavaScript로 인터랙티브하게!</h4>
              </div>
            </Link>
          </div>
        </header>
        <div className="why">
          <h5>취업을 보장해주는 고액 학원도 있고 널려 있는 게 무료 인강인데...</h5>
          <h2>왜 다들 코드잇을 찾지?</h2>
          <div className="why__container">
            <div className="reason">
              <div className="num">01</div>
              <h3>1시간짜리 강의? <b>5분이면 충분한데!</b></h3>
              <p>우리 다 바쁘잖아요?<br/> 지하철에서도 볼 수 있는 영상과 꿀팁 노트. 제가 다 정리해놨습니다!</p>
              <div className="img why1" />
            </div>
            <div className="reason">
              <div className="num">02</div>
              <h3>시키는 것만 해도 <b>포트폴리오 완성?!</b></h3>
              <p>그냥 문법만 배운다고요? 뭘 만들어봐야 프로그래밍이죠.<br/> 수업만 끝내도 고퀄의 프로젝트가 벌써 몇 개나!</p>
              <div className="img why2" />
            </div>
            <div className="reason">
              <div className="num">03</div>
              <h3>모르는 게 있다고? <b>물어보면 되지!</b></h3>
              <p>모르는 게 있으면 그냥 넘어가지 마세요.<br/> 강사들과 수천 명의 동료들이 당신의 질문을 기다리고 있습니다!</p>
              <div className="img why3" />
            </div>
            <div className="reason">
              <div className="num">04</div>
              <h3>선생님은...? <b>아이비리그 출신!</b></h3>
              <p>이미 수천 명에게 프로그래밍을 알린<br/> 한국 코딩 인강계의 스타, 아이비리그 컴퓨터과학과 출신 강사!</p>
              <div className="img why4" />
            </div>
          </div>
        </div>
        <div className="reviews">
          <h3>코드잇 진짜 좋냐고?</h3>
          <h4>수강생들에게 직접 들어보자!</h4>
          <div className="icon-together"/>
          <div className="label">수강후기 평균 별점</div>
          <div className="score"><span className="num">4.9</span><span>점</span></div>
          <Link to="/reviews" className="reviews__link">수강후기 보기</Link>
        </div>
        <div className="best-box">
          <h5>시간 낭비, 돈 낭비는 제발 그만...</h5>
          <h2>코드잇이 코딩 공부로는 그만!</h2>
          <div className="grid">
            <div className="left">
              <div className="coor-plane">
                <span className="axis-label" id="x-label1">못 가르침</span>
                <span className="axis-label" id="x-label2">잘 가르침</span>
                <span className="axis-label" id="y-label1">높은 가격</span>
                <span className="axis-label" id="y-label2">낮은 가격</span>

                <div className="scale">
                  <span className="worst">Worst</span>
                  <div className="indicator"></div>
                  <span className="best">Best</span>
                </div>

                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>

                <div className="coor" id="coor1">
                  <div className="dot"></div>
                  <div className="label">코딩 학원</div>
                </div>
                <div className="coor" id="coor2">
                  <div className="dot"></div>
                  <div className="label">코딩 부트캠프</div>
                </div>
                <div className="coor" id="coor3">
                  <div className="dot"></div>
                  <div className="label">다른 유료 인강</div>
                </div>
                <div className="coor" id="coor4">
                  <div className="dot"></div>
                  <div className="label">무료 인강</div>
                </div>
                <div className="coor" id="coor5">
                  <div className="dot"></div>
                  <div className="label">코드잇</div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="quotes">
                <div className="quote">
                  “겨우 이 돈 내고 이렇게 배워도 되나 싶습니다.”
                </div>
                <div className="quote">
                  “아마 제가 살면서 가장 잘 쓴 돈이 아닌가 싶습니다.”
                </div>
                <div className="quote">
                  “비싼 돈 주고 배웠었는데 왜 그랬을까요…”
                </div>
                <div className="quote">
                  “다음 강의 나오면 30만원이라도 들을 겁니다.”
                </div>
                <div className="quote">
                  “회사 찾아가서 감사하다고 하고 싶을 정도에요.”
                </div>
              </div>
              <Link className="right-link" to='/recommendation'>
                <div className="icon-arrow"/>
                <span>일단 무료로 시작하기!</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="invitation">
          <div className="invitation__container">
            <div className="left">
              <h2>코딩, 스펙이 아니라 필수입니다.</h2>
              <p>코딩이 쉬워지는 주문, 코드잇!<br/>코딩 공부 더 이상 미루지 말고 코드잇에서 함께해요!</p>
              <a href="https://www.facebook.com/codeit.kr" rel="noopener noreferrer" target="_blank">코드잇</a>
            </div>
            <div className="right">
              <Link className="right-link" to="/courses">
                <div className="icon icon-courses"/>
                <div className="text">
                  <div className="label">코드잇 수업</div>
                  <div className="description">비전공자도 쉽게 배우는 재미있는 <b>수업</b></div>
                </div>
              </Link>
              <Link className="right-link" to="/schools">
                <div className="icon icon-schools"/>
                <div className="text">
                  <div className="label">코드잇 스쿨</div>
                  <div className="description">기초부터 심화까지 한번에 배우는 <b>스쿨</b></div>
                </div>
              </Link>
            </div>
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

export default Main;

