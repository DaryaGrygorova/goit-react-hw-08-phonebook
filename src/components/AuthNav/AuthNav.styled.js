import { Box, Button, styled } from '@mui/material';
import { theme } from 'theme';

export const StyledBox = styled(Box)`
  display: flex;
  gap: ${theme.space[4]}px;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  color: inherit;
  border-color: ${theme.colors.accent};

  &.active {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  }
  :hover {
    background-color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
  }
`;
