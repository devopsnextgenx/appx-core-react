import React from 'react';
import './App.css';

import { Header, HeaderProps } from './components/pageComponents/header/Header';
import Footer, { FooterProps } from './components/pageComponents/footer/Footer';

const iconSrc = "https://picsum.photos/150";

function App() {
  const headerProps: HeaderProps = {
    title: "Appx UI",
    companyIconOptions: {
      src: iconSrc,
      options: {
        sizeOption: "small",
      },
    },
    profileIconOptions: {
      src: iconSrc,
      options: {
        sizeOption: "small",
      }
    },
  };
  const footerProps: FooterProps = {
    companyIconOptions: {
      src: iconSrc,
      options: {
        sizeOption: "small",
      },
    },
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Contact", url: "/contact" },
    ],
  };
  return (
    <div className="App">
      <Header {...headerProps} />
      
      <Footer {...footerProps} />
    </div>
  );
}

export default App;
