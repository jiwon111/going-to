import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  display: flex;
  //background: #8ccf9b;
  background: #1bc0a7;
  color: white;
  width: 250px;
  height: 70px;
  border-radius: 20px;
  font-size: 25px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Button = ({ answer, answerId }) => {
  const navigate = useNavigate();
  const clickHander = () => {
    if (answerId === 0) {
      if (answer === '국내') {
        window.location.href = '/domestic';
      } else if (answer === '해외') {
        window.location.href = '/foreign';
      } else {
        console.error();
      }
    } else {
      navigate(`${answerId}`);
    }
  };
  return (
    <div>
      <ButtonStyle onClick={() => clickHander()}>{answer}</ButtonStyle>
    </div>
  );
};
export default Button;
