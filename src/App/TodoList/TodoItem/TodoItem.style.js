import { css } from 'styled-components';

export const box = css`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;
