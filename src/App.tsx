import React from 'react';
import './App.css';

import { Header, HeaderProps } from './components/pageComponents/header/Header';

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
  return (
    <div className="App">
      <Header {...headerProps} />
    </div>
  );
}

export default App;
