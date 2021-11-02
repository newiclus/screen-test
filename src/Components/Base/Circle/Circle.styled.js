import styled from 'styled-components';
import { theme } from '../../../Styles/theme';

export const CircleTag = styled.span`
  background-color: ${(props) => theme.colors[props.color]};
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  vertical-align: middle;
`;
