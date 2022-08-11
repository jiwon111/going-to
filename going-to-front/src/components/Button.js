import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { surveyInit, surveyInsert } from '../modules/survey';
import { useDispatch, useSelector } from 'react-redux';

const Button = ({ answer, answerId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHander = () => {
    if (answerId === 0) {
      if (answer === '국내') {
        dispatch(surveyInsert(true));
        navigate('/domestic', {
          state: {
            answer,
            answerId,
          },
        });
      } else if (answer === '해외') {
        dispatch(surveyInsert(false));
        navigate('/foreign', {
          state: {
            answer,
            answerId,
          },
        });
      } else {
        console.error();
      }
    } else if (answerId === 3) {
      dispatch(surveyInsert(answer));
      navigate('/result');
    } else {
      dispatch(surveyInsert(answer));
      navigate(`${answerId}`, {
        state: {
          answer,
          answerId,
        },
      });
    }
  };
  return (
    <div>
      <ButtonStyle onClick={() => clickHander()}>{answer}</ButtonStyle>
    </div>
  );
};
export default Button;
const ButtonStyle = styled.div`
  display: flex;
  //background: #8ccf9b;
  background: #1bc0a7;
  color: white;
  width: 250px;
  height: 70px;
  border-radius: 20px;
  font-size: 25px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
