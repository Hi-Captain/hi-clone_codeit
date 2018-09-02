import React, { Fragment } from 'react';
import './PageTemplate.scss';
import Navbar from '../Navbar';
import Footer from '../Footer';

const PageTemplate = ({children}) => {
  return (
    <Fragment>
    <div className="pageTemplate">
      <Navbar/>
      {children}
      <Footer/>
      <div className="chat-plugin" />
    </div>
    <div className="resize">적용되지 않은 화면 크기 입니다.<br/>화면 크기를 좀 더 넓혀 주세요.</div>
    </Fragment>
  );
};

export default PageTemplate;