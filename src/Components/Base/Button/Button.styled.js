import styled, { css } from 'styled-components';
import { theme } from '../../../Styles/theme';

export const ButtonTag = styled.button`
  border: 0 none;
  border-radius: ${(props) => props.border}px;
  background-color: ${(props) =>
    props.color ? theme.colors[props.color] : '#EFEFEF'};
  cursor: pointer;
  margin: 0;
  padding: 0;
  outline: 0 none;
  text-align: center;
  transition: 0.3s ease-out;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  z-index: 1;

  ${(props) =>
    props.size === 'large' &&
    css`
      color: ${theme.colors.white};
      font-size: ${theme.fontSize.subtitle};
      font-weight: ${theme.weight.bold};
      display: block;
      height: 44px;
      width: 100%;
      &:hover {
        background-color: rgba(0, 110, 172, 1);
      }
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      color: ${theme.colors.white};
      font-size: ${theme.fontSize.text};
      padding: 6px 16px;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      color: ${theme.colors.black};
      font-size: ${theme.fontSize.text};
      font-weight: ${theme.weight.regular};
      padding: 4px 8px;

      i {
        font-size: 16px;
        margin-top: 7px;
        vertical-align: top;
        line-height: 0;
      }
    `}
  
  span {
    display: inline-block;
    margin-right: 4px;
  }
`;
