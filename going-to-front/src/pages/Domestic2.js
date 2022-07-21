import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import QuestionBlock from '../components/QuestionBlock';

const Domestic2 = () => {
  return (
    <>
      <QuestionBlock
        question={'선호하는 휴가 형태는\n무엇인가요?'}
        questionId={2}
      />
      <Buttons>
        <Button answer={'호캉스'} />
        <Button answer={'자연'} />
        <Button answer={'액티비티'} />
        <Button answer={'전시관람'} />
      </Buttons>
    </>
  );
};
export default Domestic2;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
