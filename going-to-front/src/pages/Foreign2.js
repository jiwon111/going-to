import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import QuestionBlock from '../components/QuestionBlock';

const Foreign2 = () => {
  return (
    <>
      <QuestionBlock
        question={'선호하는 휴가 형태는\n무엇인가요?'}
        questionId={2}
      />
      <Buttons>
        <Button answer={'휴양'} />
        <Button answer={'관광'} />
        <Button answer={'먹방'} />
        <Button answer={'쇼핑'} />
        <Button answer={'문화탐방'} />
      </Buttons>
    </>
  );
};
export default Foreign2;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
