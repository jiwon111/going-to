import React from 'react';
import styled from 'styled-components';

const QuestionBlockStyle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  white-space: pre-wrap;
  justify-content: flex-start;
  font-weight: 600;
`;
const QuestionCounter = styled.div`
  align-self: flex-end;
  color: #838383;
  font-size: 25px;
  margin-bottom: 50%;
  margin-top: 3%;
  margin-right: 10%;
  font-weight: normal;
`;
const QuestionBlock = ({ question, questionId }) => {
  return (
    <QuestionBlockStyle>
      <QuestionCounter>{questionId + 1}/4</QuestionCounter>
      {question}
    </QuestionBlockStyle>
  );
};
export default QuestionBlock;
