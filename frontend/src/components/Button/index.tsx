import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtoProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtoProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
