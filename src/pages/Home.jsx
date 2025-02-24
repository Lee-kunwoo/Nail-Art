import React from "react";
import Slider from 'src/com/Slider.jsx';
import TextTyping from 'src/com/TextTyping.jsx';
import Footer from 'src/com/Footer.jsx';
import "../styles/slider.scss"; // 슬라이더 스타일 적용
import "../styles/TextTyping.scss"; // SCSS 파일 연결

function Home() {
  return (
    <div>
      <Slider />      
      <TextTyping />     
      <Footer />       
    </div>
  );
}

export default Home;
