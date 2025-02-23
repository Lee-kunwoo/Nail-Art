import React, { useEffect, useState } from "react";
import "../styles/TextTyping.scss"; // SCSS 파일 연결

const TextTyping = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 진행률 계산 함수
  const calWidth = (scroll, start, end) => {
    if (scroll < start) return 0;
    if (scroll > end) return 100;
    return ((scroll - start) / (end - start)) * 100;
  };

  return (
    <div id="TextoutBox">
      <div className="text">
        <span>신뢰와 열정으로 네일아트의&nbsp;</span>
        <p style={{ width: `${calWidth(scrollY, 482, 595)}%` }}>
        신뢰와 열정으로 네일아트의</p>
      </div>
      <div className="text">
        <span>미래를 선도합니다.</span>
        <p style={{ width: `${calWidth(scrollY, 596, 709)}%` }}>
          미래를 선도합니다.
        </p>
      </div>
    </div>
  );
};

export default TextTyping;
