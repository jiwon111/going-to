import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  display: flex;
  background: #8ccf9b;
  color: white;
  width: 250px;
  height: 70px;
  border-radius: 20px;
  font-size: 30px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

const Button = ({ answer, answerId }) => {
  const [id, setId] = useState([]);
  //배열로 저장
  // useEffect(() => {
  //   setId(answerId);
  //   console.log(id);
  // }, );

  const clickHander = () => {
    setId(answerId); //배열로 바꾸기
    console.log(answerId);
    if (answerId === 0) {
      if (answer === '국내') {
        window.location.href = '/domestic';
      } else if (answer === '해외') {
        window.location.href = '/foreign';
      } else {
        console.error();
      }
    }
    // } else if (answerId===1){
    //     window.location.href
    // }
  };
  return (
    <div>
      <ButtonStyle onClick={() => clickHander()}>{answer}</ButtonStyle>
    </div>
  );
};
export default Button;
