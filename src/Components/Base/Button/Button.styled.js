import styled, { css } from 'styled-components';
import { theme } from '../../../Styles/theme';

export const ButtonTag = styled.button`
  border: 1px solid ${(props) => theme.colors[props.color]};
  border-radius: ${(props) => props.border}px;
  background-color: ${(props) => theme.colors[props.color]};
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
      height: 42px;
      width: 100%;
      &:hover {
        border-color: rgba(0, 110, 172, 1);
        background-color: rgba(0, 110, 172, 1);
      }
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      color: ${theme.colors.white};
      font-size: ${theme.fontSize.text};
      font-weight: ${theme.weight.medium};
      padding: 7px 5px;
      min-width: 76px;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      color: ${theme.colors.black};
      font-size: ${theme.fontSize.text};
      font-weight: ${theme.weight.regular};
      padding: 3px 7px;

      i {
        font-size: 16px;
        margin-top: 7px;
        vertical-align: top;
        line-height: 0;
        margin-left: 4px;
      }
    `}
  
  ${(props) =>
    props.variant &&
    css`
      color: ${theme.colors.black};
      border-color: ${theme.colors.lightGrey3};
    `}
  
  span {
    display: inline-block;
  }
`;
