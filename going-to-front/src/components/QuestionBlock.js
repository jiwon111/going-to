import React from 'react';
import styled from 'styled-components';

const QuestionBlockStyle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  white-space: pre-wrap;
`;
const QuestionCounter = styled.div`
  width: 76px;
  height: 48px;
  position: fixed;
  color: #838383;
  left: 340px;
  top: 15px;
  font-size: 25px;
`;
const QuestionBlock = ({ question, questionId }) => {
  return (
    <QuestionBlockStyle>
      {questionId ? <QuestionCounter>{questionId}/3</QuestionCounter> : null}
      {question}
    </QuestionBlockStyle>
  );
};
export default QuestionBlock;
