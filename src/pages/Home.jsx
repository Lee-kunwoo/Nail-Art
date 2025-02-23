import React from "react";
import Slider from '../com/Slider';
import TextTyping from '../com/TextTyping.jsx';
import Footer from '../com/Footer';
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