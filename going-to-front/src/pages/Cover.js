import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo2.png';

const clickHander = () => {
  window.location.href = '/main';
};
const Cover = () => {
  return (
    <Background>
      <img
        src={Logo}
        alt="Logo"
        style={{
          width: '50%',
          height: '50%',
          marginTop: '15%',
          marginBottom: '20%',
        }}
      />
      <Description>
        <Font>여행지 찾는 시간을</Font>
        <Font style={{ display: 'flex' }}>
          <PointFont>절약</PointFont>해주고
        </Font>
        <Font>내가 원하는 여행지를</Font>
        <Font style={{ display: 'flex' }}>
          <PointFont>추천</PointFont>해줘요
        </Font>
      </Description>
      <CoverButton onClick={() => clickHander()}>
        <Font style={{ color: 'white', fontSize: '20px' }}>지금 시작하기→</Font>
      </CoverButton>
    </Background>
  );
};
export default Cover;
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 8%;
  margin-top: 8%; */
  margin-bottom: 20%;
`;
const Font = styled.div`
  font-size: 30px;
`;
const PointFont = styled.div`
  color: #73ba7f;
`;

const CoverButton = styled.div`
  margin-top: 3%;
  background-color: #1bc0a7;
  width: 50%;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;
