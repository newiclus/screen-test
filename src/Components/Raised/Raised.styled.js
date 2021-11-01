import styled from 'styled-components';
import { theme } from '../../Styles/theme';

export const Content = styled.div`
  overflow: hidden;
`;

export const Title = styled.h1`
  font-weight: ${theme.weight.semibold};
  font-size: ${theme.fontSize.title};
  margin-bottom: 2px;
  margin-top: 0px;
`;

export const Subtext = styled.span`
  font-size: ${theme.fontSize.text};
  font-weight: ${theme.weight.regular};
  color: #848484;
`;
