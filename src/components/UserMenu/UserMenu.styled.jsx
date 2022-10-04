import { Box, Button, styled } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  display: block;
  color: inherit;
  color: inherit;
  border-color: ${p => p.theme.colors.accent};

  :hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.accent};
  }
`;
