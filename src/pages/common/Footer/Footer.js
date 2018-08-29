import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__nav">
        <div className="footer__nav-col">
          <div className="nav-title">CODEIT SCHOOL</div>
          <Link className="nav-item" to="/schools">웹 프론트엔드 개발 스쿨</Link>
          <Link className="nav-item" to="/schools">기수강생 웹 프론트엔드 개발 스쿨</Link>
        </div>
        <div className="footer__nav-col">
          <div className="nav-title">CODEIT CLASS</div>
          <Link className="nav-item" to="/courses">파이썬 프로그래밍 기초</Link>
          <Link className="nav-item" to="/courses">HTML/CSS 웹 퍼블리싱</Link>
          <Link className="nav-item" to="/courses">JavaScript 웹 프론트엔드 개발</Link>
        </div>
        <div className="footer__nav-col">
          <div className="nav-title">COMPANY</div>
          <Link className="nav-item" to="/about">회사 소개</Link>
          <Link className="nav-item" to="/reviews">수강 후기</Link>
        </div>
        <div className="footer__nav-col">
          <div className="nav-title">SUPPORT</div>
          <Link className="nav-item" to="/faq">FAQ</Link>
          <Link className="nav-item" to="/recommendation">나에게 맞는 수업찾기</Link>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <div className="footer__bottom-left">
            <div className="footer-logo"></div>
            <div className="footer-meta">
              <b>(주)코드잇</b> | <b>TEL</b> 010-4166-1390 | <b>E-Mail</b> yoonsoo@codeit.kr | <b>Kakao ID</b> 코드잇 | <b>대표이사</b> 강영훈 | <b>개인정보보호책임자</b> 강영훈 | <b>사업자 번호</b> 313-86-00797 <b>주소</b> 서울 서대문구 이화여대1길 38 다올노블리움 2층 코드잇
              <br/>ⓒ 2017 Codeit. All rights reserved.
            </div>
          </div>
          <div className="footer__bottom-right">
            <a className="footer-sns kakao" href="https://pf.kakao.com/_HxcRDM" rel="noopener noreferrer" target="_blank"> </a>
            <a className="footer-sns FB" href="https://www.facebook.com/codeit.kr" rel="noopener noreferrer" target="_blank"> </a>
            <a className="footer-sns insta" href="https://www.instagram.com/codeit_official/" rel="noopener noreferrer" target="_blank"> </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
