import React, { Component } from 'react';
import './About.scss';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', this._ScrollNav);
    this._SetAboutPage()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._ScrollNav);
    this._SetAboutPage()
  }

  render() {
    return (
      <div className="about">
        <header>
          <h1>코드잇 [Codeit]</h1>
          <h2>코드잇은 누구나 쉽고 재미있게<br className="hidden"/> 컴퓨터 프로그래밍을 배울 수 있도록<br className="hidden"/> 하는 에듀테크 기업입니다.</h2>
        </header>
        <div className="story">
          <div className="story__container">
            <div className="founder">
              <div className="img" />
              <div className="name">
                <b>강영훈</b> 대표
              </div>
              <div className="message">
                <b>최고의 프로그래밍 교육을 모두에게!</b><br/>
                이 시대의 스타가 되어보세요.
              </div>
            </div>
            <div className="wrap">
              <p>많은 아이들이 그렇듯, 제 어릴적 꿈은 축구 선수나 싱어송라이터같은 <b>‘스타’</b>가 되는 것이었습니다. 현실을 받아들이고 포기하려던 찰나, 당시 미국에서의 스타트업 열풍이 제 꿈을 살렸습니다.</p>
              <div className="divider"><div className="dot"></div><div className="dot"></div><div className="dot"></div></div>
              <p>페이스북, 스냅챗, 인스타그램 모두 시초는 대학 과제 혹은 취미 생활에서 비롯된 ‘스타트업’인데요. 고작 20대 초반 학생들 몇 명이서 시작했다는 걸 알고서, 분한 마음에 저도 연구를 하기 시작했죠. 그런데 찾아보니 모두 '컴퓨터 프로그래밍'을 통해서 초기 제품을 만들었다는 사실!</p>
              <div className="i-wrap"><i>“뭘 하든, 일단 프로그래밍을 배워야겠다.”</i></div>
              <p>처음에는 너무 생소하고 내가 이걸 배워서 뭘 하겠나 싶었지만, 조금 배우다보니까 <b>일상의 많은 것들이 '프로그래밍으로 해결될 수 있는 문제'</b>로 보이기 시작했습니다.</p>
              <p>프로그래밍을 통해 일상의 불편함을 해결하고 많은 사람들에게 영향을 끼치는 것. 그것이야말로 이 시대의 ‘스타’가 되는 길이라는 걸 깨달았고, 그 후 줄곧 프로그래밍과 창업에 대한 열정을 갖고 살아왔습니다.</p>
              <div className="divider"><div className="dot"></div><div className="dot"></div><div className="dot"></div></div>
              <p>2015년, 미국 대학 생활 중 드디어 창업에 도전해보기 위해 휴학을 하고 한국으로 왔습니다. 늘 프로그래밍을 전도하는 걸 좋아했기 때문에, 창업을 준비하면서 프로그래밍을 주변에 알리기 시작했습니다. 학원에서 강의를 하고, 창업에 관심 있는 초등학교 동창 윤수에게 밥과 커피를 얻어먹으며 프로그래밍을 가르쳐주기도 했는데요. 영어로만 공부를 했던 제가 한국어로 더 조리 있게 설명하기 위해서 그제야 한국어로 된 자료들을 찾아보기 시작했죠.</p>
              <p>그때 처음으로 <b>한국의 프로그래밍 교육이 많이 느리다</b>는 걸 알게되었습니다. 제가 당연시 여겼던 많은 프로그래밍 교육 자료들은 영어에 능통하지 않으면 아무 의미가 없더군요. 어렸을 때부터 늘 'IT 강국', '교육 강국'이라고 생각해왔던 한국에서 소프트웨어 교육은 그 명성을 따라가지 못하고 있었던 거죠. 그 심각성을 윤수에게 전했더니, 친구가 저에게 제안했습니다.</p>
              <div className="i-wrap"><i>“너, 나하고 일 하나 같이 하자.”</i></div>
              <p>그렇게 윤수의 추진력과 통찰력, 그리고 좋은 걸 알리고 싶어하는 제 마음이 하나되어 코드잇이 탄생했습니다. 신촌 원룸에서 몇 년 동안 동고동락하며 밤낮으로 더 좋은 콘텐츠, 더 좋은 UX를 위해 쉼없이 연구하였고, 이제는 훌륭한 팀원들을 만나 <b>‘최고의 프로그래밍 교육을 모두에게’</b> 제공하겠다는 신념을 공유하며 계속 발전해나가고 있습니다.</p>
              <p>누군가가 코드잇이 인생의 터닝포인트라고 할 때, 컴퓨터 전공자인데 처음으로 프로그래밍이 좋아졌다고 할 때, 아니면 코드잇이 군생활의 낙이라고 할 때 저희는 비로소 ‘스타’가 된 기분이 듭니다.</p> 
              <p>여러분도 이 시대의 스타가 되었으면 좋겠습니다.</p>
              <p><b>프로그래밍, 일단 배워보세요.</b></p>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="features__container">
            <div className="feature">
              <div className="icon"><div className="img-1"/></div>
              <div className="title">쉽고 재미있게</div>
              <div className="description">처음 배우는 사람에게 코딩이라는 것은 딱딱하고 어렵겠죠. 하지만 코드잇은 <b>비전공자도 쉽게 이해하고 재미있게 학습</b>할 수 있는 다양한 게임같은 과제와 프로젝트들로 누구나 부담없이 들을 수 있습니다.</div>
            </div>
            <div className="feature">
              <div className="icon"><div className="img-2"/></div>
              <div className="title">합리적인 가격으로</div>
              <div className="description">백만 원이 훌쩍 넘는 오프라인 강의를 들어도 스스로 생각하는 법을 배우지 않으면 결국 혼자서는 코드를 짤 수 없습니다.  오프라인 수업의 단점은 버리고 장점만을 갖춘 <b>고품질의 교육을 낮은 가격에</b> 제공합니다.</div>
            </div>
            <div className="feature">
              <div className="icon"><div className="img-3"/></div>
              <div className="title">소프트웨어 강국으로</div>
              <div className="description">컴퓨터 과학 분야는 엄청난 속도로 성장하고 있는 블루오션이지만, 효과적인 프로그래밍 교육 서비스는 많지 않습니다. 코드잇은 <b>한국을 소프트웨어 강국으로 만드는 데 이바지</b>할 것입니다.</div>
            </div>
          </div>
        </div>
        <div className="tasks">
          <h2>최고의 교육 서비스를 제공하기 위해</h2>
          <p>코드잇은 책임감과 신뢰를 바탕으로 <b>구성원과 팀의 성장을 위해 힘쓰는 스포츠 팀</b> 같은 기업입니다.</p>

          <div className="tasks__container">
            <div className="task">
              <div className="img1" />
              <div className="title">강의 제작</div>
              <div className="description">코드잇의 대표가 직접 강사로 참여하여 <b>커리큘럼 개발에 큰 노력을 기울입니다.</b> 수차례의 검수 과정을 거치고, 강의와 과제의 연계성을 높이기 위해 노력합니다.  컴퓨터 과학의 깊은 내용을 쉽게 가르치며, 재미있는 인터페이스를 통해 끝까지 이수하게 합니다.</div>
            </div>

            <div className="task">
              <div className="img2" />
              <div className="title">개발</div>
              <div className="description">수강생들이 공부하기에 적합한 온라인 시스템을 안정적으로 유지하기 위해 개선방법을 찾고 테스트하는 것을 게을리하지 않습니다. 즉각적인 실행 및 채점에 대한 특허권을 취득했으며, 게임화를 통한 커뮤니티 활성화, 맞춤 관리 시스템 등 <b>기술을 통해 교육 효과를 증대시키려고 합니다.</b></div>
            </div>

            <div className="task">
              <div className="img3" />
              <div className="title">디자인/기획</div>
              <div className="description">수강생들이 <b>어떻게 하면 편리하게 사이트를 이용할 수 있을지 고민</b>하며 문제점들을 개선합니다. 코드잇의 이름을 알리고 브랜드의 가치를 높이기 위해 글자 한자, 버튼 하나까지 시각적인 즐거움을 만들기 위해 노력합니다.</div>
            </div>
          </div>
        </div>
        <div className="media">
          <h2>언론에 소개된 코드잇</h2>
          <div className="media__container">
            <a href="http://news.hankyung.com/article/201608246725a?nv=o/" rel="noopener noreferrer" target="_blank"  >
              <div className="img img-1" />
              <div className="title">
                4차 산업혁명의 시대,<br/> 
                소프트웨어 교육은 필수
              </div>
            </a>
            <a href="http://www.edaily.co.kr/news/news_detail.asp?newsId=02587926612750928&amp;mediaCodeNo=257" rel="noopener noreferrer" target="_blank"  >
              <div className="img img-2" />
              <div className="title">
                인공지능의 발달,<br/>
                어떻게 대처해야 하나
              </div>
            </a>
            <a href="http://www.dt.co.kr/contents.html?article_no=2016082402109923809012" rel="noopener noreferrer" target="_blank"  >
              <div className="img img-3" />
              <div className="title">
                인공지능이 탑재된<br />
                온라인 코딩스쿨 <br className="hidden" />
                ‘코드잇’
              </div>
            </a>
            <a href="https://www.bloter.net/archives/297532" rel="noopener noreferrer" target="_blank"  >
              <div className="img img-4" />
              <div className="title">
                [ICT2017]<br/> 
                한국 에듀테크 <br className="hidden"/>
                트렌드 5가지
              </div>
            </a>
          </div>
        </div>
        <div className="team">
          <h2>로켓처럼 성장하는 코드잇과 함께하는 사람들을 소개할게요!</h2>
          <div className="team__container">
            <div className="member">
              <div className="img img-1" />
              <div className="name">강영훈</div>
              <div className="position">CEO / Instructor</div>
            </div>

            <div className="member">
              <div className="img img-2" />
              <div className="name">이윤수</div>
              <div className="position">COO</div>
            </div>

            <div className="member">
              <div className="img img-3" />
              <div className="name">김신의</div>
              <div className="position">Software Engineer</div>
            </div>

            <div className="member">
              <div className="img img-4" />
              <div className="name">손동욱</div>
              <div className="position">Contents Director /<br/> Instructor</div>
            </div>

            <div className="member">
              <div className="img img-5" />
              <div className="name">황민연</div>
              <div className="position">UX / UI Designer</div>
            </div>

            <div className="member">
              <div className="img img-6" />
              <div className="name">서동준</div>
              <div className="position">Software Engineer</div>
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
  _SetAboutPage = () => {
    document.querySelector('.footer').classList.toggle('border-none');
    document.querySelector('.navbar').classList.add('transparent')
  }
}

export default About;
