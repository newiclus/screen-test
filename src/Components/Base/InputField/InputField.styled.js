import styled from 'styled-components';
import { theme } from '../../../Styles/theme';

export const ContentInput = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const InputTag = styled.input`
  background-color: ${theme.colors.lightGrey};
  color: ${theme.colors.lightBlack};
  border-radius: 22px;
  font-size: ${theme.fontSize.input};
  font-weight: ${theme.weight.medium};
  outline: 0 none;
  border: 0 none;
  width: 100%;
  padding: 13px 19px;
`;
