// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BannerComponent } from './component/banner';
import NavbarComponent from './component/navbar';
import { FooterComponent } from './component/footer';
// import { Button } from 'flowbite-react';
function App() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <BannerComponent />
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
