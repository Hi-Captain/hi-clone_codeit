import React, { Component } from 'react';
import './Faq.scss';

class Faq extends Component {
  componentDidMount(){
    this._SetFaqPage()
  }

  componentWillUnmount(){
    this._SetFaqPage()
  }

  render() {
    return (
      <div className="faq">
        <div className="faq__accordion">
          <h3>수업 관련 FAQ</h3>
          <ul>
            <li>
              <input type="radio" id="class-1" name="classAccordion" defaultChecked/>
              <label className="question" htmlFor="class-1">코드잇의 강좌는 어떤 형식으로 구성되어있나요?<div className="arrow"/></label>
              <div className="answer">
                <p>첫째, 동영상 강의와 핵심 노트로 개념을 정리할 수 있습니다.</p>
                <p>둘째, 배운 개념을 실습할 수 있는 과제와 프로젝트가 주어집니다.</p>
                <p>셋째, 이를 제출하면 자동/수동으로 채점과 피드백을 받으실 수 있습니다.</p>
                <p>넷째, 궁금하신 점은 언제든 커뮤니티에 질문을 올려, 동료 수강생 분들끼리 질문과 답변을 주고 받으실 수 있습니다.</p>
                <p>마지막으로, 강의를 모두 마친 후 배운 내용을 응용하여 스스로 포트폴리오를 만들어보시는 것을 권장드리며, 이를 커뮤니티에 공유할 수 있습니다.</p>
                <p>진도의 70% 이상을 이수하시면, 코드잇의 공식 ‘수료증’을 발급해드립니다.</p>
              </div>
            </li>
            <li>
              <input type="radio" id="class-2" name="classAccordion"/>
              <label className="question" htmlFor="class-2">온라인으로 제대로 배울 수 있을까요?<div className="arrow"/></label>
              <div className="answer">
                <p>제가 오프라인 강의를 했었는데, 가장 아쉬웠던 점은 수강생 분들의 수준별 차이를 일일이 반영할 수 없었던 것입니다. 한번 빠진 수강생 분은 더 이상 따라올 수 없었고, 다른 사람들의 공부에 방해가 될까봐 질문도 많이 안 하셨습니다. 저에게 배우기 위해 값진 시간과 돈을 투자하신 분들에게 최선의 효과를 드리지 못한 게 죄송스럽기까지 했습니다. '어떻게 하면 많은 사람들에게 훌륭한 교육을 제공해드릴 수 있을까?' 고민하다가 나온 결과물이 코드잇입니다.</p>
                <p>영상과 노트를 여러 번 보며 어려운 개념도 완벽하게 이해할 수 있고, 과제와 프로젝트를 해결하며 실력을 쌓을 수 있습니다. 또한 커뮤니티에 자유롭게 질문을 올리고 동료 수강생 분들과 답변을 주고 받을 수 있습니다. 코드잇은 온라인이지만 오히려 과외 이상의 효과를 보장합니다.</p>
              </div>
            </li>
            <li>
              <input type="radio" id="class-3" name="classAccordion"/>
              <label className="question" htmlFor="class-3">오프라인 강의는 없나요?<div className="arrow"/></label>
              <div className="answer">
                <p>오프라인 강의는 별도로 없습니다. '온라인으로 제대로 배울 수 있을까요?' 질문의 답변에서 확인하실 수 있듯이, 저희가 오프라인 학원에서 강의해본 결과, 1) 수준별 차이를 반영하는 것이 어렵고, 2) 수업을 한 번이라도 빠진 학생을 도와드리기 힘들고, 3) 1:1로 피드백을 드리기가 불가능하여 온라인 프로그래밍 스쿨을 만들게 된 것입니다. 2년이 넘는 아이디어 회의와 제작 기간을 거쳐 만든 프로그램이니, 200% 이상 만족하시게 될 것입니다!</p>
              </div>
            </li>
            <li>
              <input type="radio" id="class-4" name="classAccordion"/>
              <label className="question" htmlFor="class-4">코드잇 강의의 목표는 무엇인가요?<div className="arrow"/></label>
              <div className="answer">
                <p>고액의 학원을 다니고 몇년째 개발자로 일하고 계신 분들이 아주 기본적인 알고리즘 문제도 못 푸는 모습을 보고 충격을 받았습니다. 현재 한국의 프로그래밍 교육은 자격증이나 문법을 위주로 다루고, 사실상 가장 중요한 문제 해결 능력은 가르쳐주지 않기 때문에 이런 상황을 흔히 볼 수 있었던 거죠.</p>
                <p>코드잇 수업의 목표는, 이 시대에 꼭 필요한 프로그래밍과 컴퓨터적인 사고력을 기르는 것입니다. 코드잇이 추천하는 과정을 따라 수업을 이수하면, 풀스텍 웹 개발, 모바일 어플 개발, 데이터 분석, 업무자동화 등 어떠한 분야로도 나아가실 수 있습니다.</p>
              </div>
            </li>
            <li>
              <input type="radio" id="class-5" name="classAccordion"/>
              <label className="question" htmlFor="class-5">동영상 강의는 총 몇 분 정도인가요?<div className="arrow"/></label>
              <div className="answer">
                <p>한 강좌당 동영상 강의는 60~80개 정도로 구성되어있습니다. 한 개 강의 당 강의 시간은 5분 이내입니다. 긴 영상 강의를 제공하는 것이 오히려 만들기 쉽고 제작 시간도 짧게 걸립니다. 하지만 수강생 분들의 입장에서 집중하기도 어렵고 반복학습도 어렵기 때문에, 저희는 강의를 짧게 만들었습니다. 중요한 내용을 간결히, 5분 이내에 배울 수 있는 것이 코드잇의 매력입니다.</p>
              </div>
            </li>
            <li>
              <input type="radio" id="class-6" name="classAccordion"/>
              <label className="question" htmlFor="class-6">커뮤니티에 질문을 올리면 답변을 받을 수 있나요?<div className="arrow"/></label>
              <div className="answer">
                <p>70%의 확률로 받을 수 있습니다. 커뮤니티는 수강생 분들끼리 질문과 답변을 주고 받는 공간입니다. 이 때문에 질문 제목과 내용을 구체적으로 올리실 수록 답변을 받을 확률이 높아집니다.</p>
                <p>수강료는 강의 콘텐츠에 대한 비용입니다. 저희가 간혹 커뮤니티의 질문에 답변을 드리기도 하지만, 이는 의무 사항이 아니며 비용에 포함되어있지 않다는 점을 말씀드립니다. 다만, 저희도 최대한 모든 분들이 질문과 답변을 주고 받으실 수 있도록 커뮤니티를 활성화하는 등 최선을 다해 노력하겠습니다.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="faq__accordion">
          <h3>서비스 관련 FAQ</h3>
          <ul>
            <li>
              <input type="radio" id="service-1" name="serviceAccordion" defaultChecked/>
              <label className="question" htmlFor="service-1">수업 기간은 연장할 수 있나요?<div className="arrow"/></label>
              <div className="answer">
                <p>대부분의 경우 3개월이면 여유롭게 수업을 이수하실 수 있습니다. 중간에 바쁜 사정이 있으면 바로 아래 질문에 있는 '중도 휴학 제도'를 활용해보세요! 만약 3개월 내에 다 끝내지 못하면, 1개월 단위로 연장할 수 있습니다!</p>
              </div>
            </li>
            <li>
              <input type="radio" id="service-2" name="serviceAccordion"/>
              <label className="question" htmlFor="service-2">중간에 휴학도 가능한가요?<div className="arrow"/></label>
              <div className="answer">
                <p>1회에 한하여 중도 휴학을 할 수 있습니다. 휴학 가능 기간은 최대 4주입니다. 휴학 후 4주가 지나면, 자동으로 수업이 시작되며 수강 가능일이 차감됩니다. 강의를 듣는 도중 바쁘신 분들은, 휴학 제도를 이용해주시기 바랍니다.</p>
              </div>
            </li>
            <li>
              <input type="radio" id="service-3" name="serviceAccordion"/>
              <label className="question" htmlFor="service-3">수동 채점 과제에 대한 채점이 늦어지면 어떻게 해야 하나요?<div className="arrow"/></label>
              <div className="answer">
                <p>수동 채점 과제는 영업일 1-2일 이내로 처리하는 것이 원칙입니다. 월요일에 제출하셨다면 수요일 안에 채점을 받습니다. 금요일에 제출하셨다면 최대 화요일 안에 채점을 받습니다. 만약 그 기한 안에 채점을 받지 못하셨다면, 코드잇 팀에서 실수를 한 것입니다. 댓글 또는 <a href="mailto:yoonsoo@codeit.kr" target="_top">yoonsoo@codeit.kr</a>로 문의주시면, 빠르고 친절하게 답변드리도록 하겠습니다.</p>
              </div>
            </li>
            <li>
              <input type="radio" id="service-4" name="serviceAccordion"/>
              <label className="question" htmlFor="service-4">수료증 발급 기준은 무엇인가요?<div className="arrow"/></label>
              <div className="answer">
                <p>수료증은 각 강좌의 70% 이상을 수료했을 때 발급받으실 수 있습니다. 강의를 끝까지 이수하신 후, 멋진 수료증을 받아보세요!</p>
              </div>
            </li>
            <li>
              <input type="radio" id="service-5" name="serviceAccordion"/>
              <label className="question" htmlFor="service-5">채팅 문의는 어떤 용도로 사용하는 건가요?<div className="arrow"/></label>
              <div className="answer">
                <p>채팅 문의는 강좌 신청에 대한 문의, 서비스/강의 개선 사항, 건의 사항을 받는 용도입니다. 과제나 강의 개념과 연관된 질문은 커뮤니티에 올려주세요!</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="faq__accordion">
          <h3>결재 관련 FAQ</h3>
          <ul>
            <li>
              <input type="radio" id="payment-1" name="paymentAccordion" defaultChecked/>
              <label className="question" htmlFor="payment-1">환불 규정은 어떻게 되나요?<div className="arrow"/></label>
              <div className="answer">
                <ol>
                  <li>총 강의 기간의 1/3 경과 전이며, 총 교습 진도의 1/3 경과 전일 때: 이미 납부한 교습비의 2/3에 해당하는 교육비</li>
                  <li>총 강의 기간의 1/2 경과 전이며, 총 교습 진도의 1/2 경과 전일 때: 이미 납부한 교습비의 1/2에 해당하는 교육비</li>
                  <li>총 강의 기간의 1/2 경과 후이거나, 총 교습 진도의 1/2 경과 후일 때: 반환하지 않음</li>
                  <li>기타: 중도 휴학을 신청하거나, “스쿨” 탭에서 여러 강의가 묶인 스쿨 과정을 수강하거나, 특별 이벤트(지인추천 할인/리워드, 기간연장)를 통해 결제 시 환불이 불가능합니다.</li>
                </ol>
              </div>
            </li>
            <li>
              <input type="radio" id="payment-2" name="paymentAccordion"/>
              <label className="question" htmlFor="payment-2">수료증과 세금 계산서 발급이 가능한가요?<div className="arrow"/></label>
              <div className="answer">
                <p>네! 수료증은 강의의 70% 이상을 수료했을 때 신청하시면 언제든지 가능합니다. 기업에서 지원을 받아 프로그래밍 교육을 받으려고 하시는 분들은 이 서비스를 이용해주시면 됩니다! 세금 계산서는 요청 후 2일 이내로 발급됩니다. <a href="mailto:yoonsoo@codeit.kr" target="_top">yoonsoo@codeit.kr</a>로 문의 부탁드립니다.</p>
              </div>
            </li>
            <li>
              <input type="radio" id="payment-3" name="paymentAccordion"/>
              <label className="question" htmlFor="payment-3">결제가 잘 안될 때는 어떻게 해야 하나요?<div className="arrow"/></label>
              <div className="answer">
                <p>국내외 카드 결제, 무통장 입금, 실시간 계좌 이체 모두 잘 안되실 때에는, 우리은행 1005-003-230041 주식회사 코드잇으로 교육비를 입금해주세요. 꼭 예금주명과의 일치 여부를 확인해주세요.</p>
                <p>그 후 <a href="mailto:yoonsoo@codeit.kr" target="_top">yoonsoo@codeit.kr</a> 또는 코드잇의 채팅문의 아이콘을 통해 1) 코드잇 아이디와 2) 신청 과목, 3) 예금주명을 말씀해주시면 가능한 빨리 수업을 열어드리겠습니다.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }


  _SetFaqPage = () => {
    document.querySelector('.navbar').classList.toggle('transparent');
    document.querySelector('.footer').classList.toggle('border-none');
  }
}

export default Faq;
