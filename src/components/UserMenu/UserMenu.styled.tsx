import { Box, Button, styled } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  gap: ${p => p.theme.spacing(4)};
  align-items: center;
`;

export const StyledButton = styled(Button)`
  display: block;
  color: inherit;
  color: inherit;
  border-color: ${p => p.theme.palette.primary.main};

  :hover {
    background-color: ${p => p.theme.palette.primary.main};
    color: ${p => p.theme.palette.common.white};
    border-color: ${p => p.theme.palette.primary.main};
  }
`;
