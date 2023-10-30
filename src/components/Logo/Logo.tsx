import React from 'react';
import logo from '../../assets/png/LogoHeader.png';
import { StyledImg, StyledLogo } from './Logo.styled';

interface LogoProps {
  loc: 'header' | 'footer';
  size: 'lg' | 'md';
}

const Logo: React.FC<LogoProps> = ({ loc, size }) => {
  return (
    <StyledLogo to="/">
      <StyledImg src={logo} alt="AJ SERWIS Logo" size={size} loc={loc} />
    </StyledLogo>
  );
};

export default Logo;
