import { css } from 'styled-components';

export const box = css`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;
