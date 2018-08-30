import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import LoginSignup from '../common/LoginSignup';


const Login = () => {
  return (
    <Fragment>
      <LoginSignup>
        <h2>로그인</h2>
        <form className="LS-form">
          <input className="LS-form__txt" type="text" autoFocus placeholder="이메일을 입력하세요."/>
          <input className="LS-form__txt" type="text" placeholder="비밀번호를 입력하세요." />
          <input className="LS-form__submit" type="submit" value="로그인"/>
        </form>
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
          아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
        </div>
        <div className="LS-link">
          비밀번호가 기억이 안 나시나요?<a>비밀번호 찾기</a>
        </div>
      </LoginSignup>
    </Fragment>
  );
};

export default Login;