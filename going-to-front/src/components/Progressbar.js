import React from 'react';
import styled from 'styled-components';
const Progressbar = (props) => {
  return (
    <Bar>
      <Progress width={((props.width + 1) / 4) * 100 + '%'} />
    </Bar>
  );
};
export default Progressbar;
const Bar = styled.div`
  width: 80%;
  height: 10px;
  background-color: #f1f1f1;
  border-radius: 20px;
  transition: width 1s;
`;
const Progress = styled.div`
  width: ${(props) => props.width};
  height: 10px;
  transition: width 1s;
  border-radius: 20px;
  background-color: #1bc0a7;
`;
