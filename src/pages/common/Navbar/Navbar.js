import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Logo</NavLink>
      <NavLink to="/courses">수업</NavLink>
      <NavLink to="/schools">스쿨</NavLink>
      <NavLink to="/questions">커뮤니티</NavLink>
      <NavLink to="/reviews">수강후기</NavLink>
      <NavLink to="/signup">회원가입</NavLink>
      <NavLink to="/login">로그인</NavLink>
    </div>
  );
}

export default Navbar;
