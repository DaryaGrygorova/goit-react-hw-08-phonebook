import { Box, Button, styled } from '@mui/material';

import { theme } from '../../theme';

export const StyledBox = styled(Box)`
  display: flex;
  gap: ${theme.space[4]}px;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  display: block;
  color: inherit;
  color: inherit;
  border-color: ${theme.colors.accent};

  :hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};
    border-color: ${theme.colors.accent};
  }
`;
