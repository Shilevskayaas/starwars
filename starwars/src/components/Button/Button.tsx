import { NavLink } from 'react-router-dom';
import './styled'
import { StyledButton } from './styled';

type ButtonProps = {
  className?: string;
  to: string;
  children: React.ReactNode;
};

export default function Button({ className = '', to, children }: ButtonProps) {

  return (
    <NavLink to={to}>
      <StyledButton className={className}>
        {children}
      </StyledButton>
    </NavLink>
  );
}