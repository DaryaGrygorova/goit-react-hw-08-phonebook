import { Box, Button, styled } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  gap: ${p=>p.theme.space[4]}px;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  color: inherit;
  border-color: ${p=>p.theme.colors.accent};

  &.active {
    background-color: ${p=>p.theme.colors.secondary};
    color: ${p=>p.theme.colors.white};
  }
  :hover {
    background-color: ${p=>p.theme.colors.accent};
    border-color: ${p=>p.theme.colors.accent};
  }
`;
