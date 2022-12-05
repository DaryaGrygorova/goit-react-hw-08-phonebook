import { Box, styled, TextField } from '@mui/material';

export const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  max-width: 600px;
`;

export const Input = styled(TextField)`
  outline: true;
  font-size: 16px;
  /* padding: ${p => p.theme.spacing(2)}; */
  border-radius: ${p => p.theme.spacing(2)};
  width: 200px;
  background-color: ${p => p.theme.palette.background.default};
` as typeof TextField;
