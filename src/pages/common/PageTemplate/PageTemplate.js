import React from 'react';
import './PageTemplate.scss';
import Navbar from '../Navbar';
import Footer from '../Footer';

const PageTemplate = ({children}) => {
  return (
    <div className="pageTemplate">
      <Navbar/>
      {children}
      <Footer/>
      <div className="chat-plugin" />
    </div>
  );
};

export default PageTemplate;