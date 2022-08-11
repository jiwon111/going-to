import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api';
import { useSelector } from 'react-redux/es/exports';

const Result = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [result, setResult] = useState();
  const survey = useSelector((state) => state.survey.surveyResult);
  console.log(survey);
  //국내일때
  const compareDomestic = (item) => {
    if (survey[1] === item.season) {
      if (survey[2] === item.prefer) {
        if (survey[3] === item.scenery) {
          console.log('국내');
          console.log(item);
          setResult(item);
        }
      }
    }
  };
  const compareForeign = (item) => {
    if (survey[1] === item.season) {
      if (survey[2] === item.prefer) {
        if (survey[3] === item.budget) {
          //surveyResult에 button id 추가하기
          console.log('해외');
          console.log(item);
          setResult(item);
        }
      }
    }
  };
  const placeService = async () => {
    const res = await axiosInstance.get('/place').then((res) => {
      const data = res.data;
      console.log(data);
      data.map((item) => {
        if (item.domestic === survey[0]) {
          if (item.domestic === true) compareDomestic(item);
          else compareForeign(item);
        }
      });
    });
    return res;
  };
  useEffect(() => {
    placeService();
  }, []);
  return (
    <ResultBlock>
      <ResultDescription>
        당신에게 딱 맞는 여행지는!
        <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
          {result ? result.name : null}
        </span>
      </ResultDescription>
      <img
        alt="장소이름"
        src={result ? result.img : null}
        style={{ width: '60%' }}
      />
      <ResetButton onClick={() => navigate('/')}>↺ 다시하기</ResetButton>
    </ResultBlock>
  );
};
export default Result;
const ResultBlock = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const ResultDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8%;
`;
const ResetButton = styled.div`
  margin-top: 3%;
  background-color: #1bc0a7;
  color: white;
  width: 120px;
  height: 45px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;
