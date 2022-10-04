import { Box, styled, TextField } from '@mui/material';

export const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${p=>p.theme.space[3]}px;
  max-width: 600px;
`;

export const Input = styled(TextField)`
outline: true;
font-size: 16px;
  /* padding: ${p=>p.theme.space[2]}px; */
  border-radius: ${p=>p.theme.radii.sm};
  width: 200px;
  background-color: ${p=>p.theme.colors.background};
`;
