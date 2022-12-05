import { Box, Button, Link, styled } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  gap: ${p=>p.theme.spacing(4)};
  align-items: center;
`;

export const StyledButton = styled(Button)`
  outline-style: auto;
  color: inherit;
  border: 1px solid ${p=>p.theme.palette.primary.main};

  &.active {
    background-color: ${p=>p.theme.palette.secondary.main};
    color: ${p=>p.theme.palette.common.white};
  }
  :hover {
    background-color: ${p=>p.theme.palette.primary.main};
    border-color: ${p=>p.theme.palette.primary.main};
  }
` as typeof Link;
