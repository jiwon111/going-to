import React from 'react';
import styled from 'styled-components';
import Progressbar from './Progressbar';

const QuestionBlock = ({ question, questionId }) => {
  return (
    <QuestionBlockStyle>
      <QuestionCounter>{questionId + 1}/4</QuestionCounter>
      <Progressbar width={questionId} />
      <Question>{question}</Question>
    </QuestionBlockStyle>
  );
};
export default QuestionBlock;
const QuestionBlockStyle = styled.div`
  width: 100%;
  height: 45%;
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
  margin-top: 5%;
  margin-right: 10%;
  font-weight: normal;
  height: 10%;
`;
const Question = styled.div`
  margin-top: 30%;
  @media only screen and (min-width: 700px) {
    margin-top: 15%;
  }
`;
