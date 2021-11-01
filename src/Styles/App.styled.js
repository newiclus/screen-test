import styled from 'styled-components';

export const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Row = styled.div`
  flex: auto;
  margin-top: 6px;
  text-align: ${(props) => props.textAlign || 'left'};
`;

export const ContentBuy = styled.div`
  margin-top: 20px;
`;
