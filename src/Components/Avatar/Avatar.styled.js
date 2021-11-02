import styled from 'styled-components';
import { theme } from '../../Styles/theme';

export const ContentRow = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-content: space-between;
`;

export const Row = styled.div`
  flex: auto;
  text-align: ${(props) => props.align || 'left'};
`;

export const User = styled.div`
  aside {
    display: inline-block;
    margin-left: 10px;
    vertical-align: top;
  }

  h2 {
    font-size: ${theme.fontSize.input};
    font-weight: ${theme.weight.bold};
    margin-top: 0;
    margin-bottom: 3px;
  }

  h3 {
    font-size: ${theme.fontSize.input};
    font-weight: ${theme.weight.regular};
    margin-top: 0;
    margin-bottom: 0px;
  }
`;
