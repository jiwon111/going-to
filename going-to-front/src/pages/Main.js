import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import QuestionBlock from '../components/QuestionBlock';
const Main = () => {
  return (
    <>
      <QuestionBlock question={'어디로\n떠나고 싶으신가요?'} questionId={0} />
      <MainButtons>
        <Button answer={'국내'} answerId={0} />
        <Button answer={'해외'} answerId={0} />
      </MainButtons>
    </>
  );
};
export default Main;
const MainButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
