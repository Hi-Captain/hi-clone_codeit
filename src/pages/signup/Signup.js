import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LoginSignup from '../common/LoginSignup';

const Signup = () => {
  return (
  <Fragment>
    <LoginSignup>
        <h2>회원가입</h2>
        <form className="LS-form">
          <input className="LS-form__txt" type="text" placeholder="이름을 입력하세요." autoFocus/>
          <input className="LS-form__txt" type="text" placeholder="이메일을 입력하세요."/>
          <input className="LS-form__txt" type="text" placeholder="비밀번호를 입력하세요."/>
          <input className="LS-form__txt" type="text" placeholder="비밀번호를 한번 더 입력하세요." />
          <input className="LS-form__submit signup" type="submit" value="가입하기"/>
        </form>
        <div className="agree">
          가입하기 버튼을 클릭하면 <span>약관</span>에 동의하며 쿠키 사용을 포함한 데이터 정책을 읽고 이해하신 것으로 간주됩니다.
        </div>
        <div className="divider">
          <span className="divider__line"></span>
          <span className="divider__or">or</span>
          <span className="divider__line"></span>
        </div>
        <div className="social-login">
          <div className="social-login__FB"><div className="icon"/><div>Facebook</div></div>
          <div className="social-login__GG"><div className="icon"/><div>Google</div></div>          
        </div>
        <div className="LS-link">
          이미 회원이신가요? <Link to="/login">로그인하기</Link>
        </div>
    </LoginSignup>
  </Fragment>
  );
};

export default Signup;