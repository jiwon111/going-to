import React from 'react';
import styled from 'styled-components';
import QuestionBlock from '../components/QuestionBlock';
import Button from '../components/Button';

const When = () => {
  return (
    <>
      <QuestionBlock question={'언제 갈 예정인가요?'} questionId={1} />
      <WhenButtons>
        <Button answer={'3월~5월'} answerId={1} />
        <Button answer={'6월~8월'} answerId={1} />
        <Button answer={'9월~11월'} answerId={1} />
        <Button answer={'12월~1월'} answerId={1} />
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
