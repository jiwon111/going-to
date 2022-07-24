import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import QuestionBlock from '../components/QuestionBlock';

const Domestic3 = () => {
  return (
    <>
      <QuestionBlock
        question={'좋아하는 풍경을\n떠올려보세요!'}
        questionId={3}
      />
      <Buttons>
        <Button answer={'산'} answerId={3} />
        <Button answer={'바다'} answerId={3} />
        <Button answer={'호수, 강'} answerId={3} />
        <Button answer={'도시'} answerId={3} />
      </Buttons>
    </>
  );
};
export default Domestic3;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
