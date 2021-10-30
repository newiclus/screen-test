import styled from 'styled-components';

export const Figure = styled.figure`
  border-radius: ${(props) => props.border}px;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.2);
  font-size: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;

  img {
    outline: 0 none;
  }
`;
