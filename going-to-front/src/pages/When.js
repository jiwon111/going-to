import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import QuestionBlock from '../components/QuestionBlock';
import Button from '../components/Button';

const When = () => {
  console.log(useLocation());
  return (
    <>
      <QuestionBlock question={'언제 갈 예정인가요?'} questionId={1} />
      <WhenButtons>
        <Button answer={'봄'} answerId={1} />
        <Button answer={'여름'} answerId={1} />
        <Button answer={'가을'} answerId={1} />
        <Button answer={'겨울'} answerId={1} />
      </WhenButtons>
    </>
  );
};
export default When;
const WhenButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
