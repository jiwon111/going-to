import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import QuestionBlock from '../components/QuestionBlock';

const Foreign3 = () => {
  return (
    <>
      <QuestionBlock question={'1인당 예산은\n얼마인가요?'} questionId={3} />
      <Buttons>
        <Button answer={'50만원 미만'} answerId={3} />
        <Button answer={'50만~100만'} answerId={3} />
        <Button answer={'100만~200만'} answerId={3} />
        <Button answer={'200만 초과'} answerId={3} />
      </Buttons>
    </>
  );
};
export default Foreign3;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
