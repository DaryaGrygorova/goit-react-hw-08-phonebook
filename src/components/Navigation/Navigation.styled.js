import { Box, Link, styled } from '@mui/material';
import { theme } from 'theme';

export const StyledLink = styled(Link)`
  color: inherit;
  font-weight: 600;
  text-decoration: none;
  display: block;
  text-transform: uppercase;

  &.active {
    font-weight: 900;
    text-decoration: underline;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  gap: ${theme.space[4]}px;
  align-items: center;
`;
