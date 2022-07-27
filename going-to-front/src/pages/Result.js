import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Result = () => {
  const navigate = useNavigate();
  return (
    <ResultBlock>
      <ResultDescription>
        당신에게 딱 맞는 여행지는!
        <span style={{ fontSize: '30px', fontWeight: 'bold' }}>캐나다</span>
      </ResultDescription>
      <img src="Images/Canada.jpg" style={{ width: '60%' }} />
      <ResetButton onClick={() => navigate('/')}>↺ 다시하기</ResetButton>
    </ResultBlock>
  );
};
export default Result;
const ResultBlock = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const ResultDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8%;
`;
const ResultImg = styled.div``;
const ResetButton = styled.div`
  margin-top: 3%;
  background-color: #1bc0a7;
  color: white;
  width: 120px;
  height: 45px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;
