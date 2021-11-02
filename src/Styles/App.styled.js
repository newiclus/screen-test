import styled from 'styled-components';

export const ContentRow = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 5px;
`;

export const Row = styled.div`
  flex: auto;
  margin-top: 6px;
  text-align: ${(props) => props.textAlign || 'left'};
`;

export const ContentBuy = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Divider = styled.div`
  border-top: 0.5px solid rgb(188, 188, 188);
  margin-left: -10px;
  margin-right: -10px;
  z-index: -1;
`;
