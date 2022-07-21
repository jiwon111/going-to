import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';

const clickHander = () => {
  window.location.href = '/main';
};
const Cover = () => {
  return (
    <>
      <Background>
        <Description>
          <Font>여행지 찾는 시간을</Font>
          <Font style={{ display: 'flex' }}>
            <PointFont>절약</PointFont>해주고
          </Font>
          <Font>내가 원하는 여행지를</Font>
          <Font style={{ display: 'flex' }}>
            <PointFont>추천</PointFont>해주는
          </Font>
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: '65%',
              height: '30%',
              position: 'absolute',
              top: '16%',
              left: '-2%',
            }}
          />
        </Description>
        <SubDescription>
          <div>나에게 맞는 여행지</div>
          <div>찾으러 가기</div>
          <CoverButton onClick={() => clickHander()}>
            <Font style={{ color: '#161616' }}>GO</Font>
          </CoverButton>
        </SubDescription>
      </Background>
    </>
  );
};
export default Cover;
const Background = styled.div`
  background: #dcf4e1;
  width: 100vw;
  height: 100vh;
`;

const Description = styled.div`
  display: inline-block;
  margin-left: 5%;
  margin-top: 3%;
`;
const Font = styled.div`
  font-size: 40px;
`;
const PointFont = styled.div`
  color: #73ba7f;
`;
const SubDescription = styled.div`
  font-size: 25px;
  margin-top: 70%;
  display: flex;
  flex-direction: column;
  text-align: -webkit-center;
  align-items: center;
`;
const CoverButton = styled.div`
  margin-top: 3%;
  background-color: #f9f9f9;
  width: 118px;
  height: 91px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
