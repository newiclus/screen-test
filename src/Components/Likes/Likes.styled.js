import styled from 'styled-components';
import { theme } from '../../Styles/theme';

export const ContentLikes = styled.div`
  padding-top: 13px;
  display: inline-block;
  margin-bottom: -0.5px;
  padding: 0 5px;

  .actived {
    display: block;
    background-color: ${theme.colors.black};
    height: 2px;
  }
`;

export const Paragraph = styled.p`
  margin-top: 0px;
  margin-bottom: 8px;
  font-size: 0.875em;
  font-weight: ${theme.weight.semibold};
`;
