import { Box, styled, TextField } from '@mui/material';
import { theme } from 'theme';

export const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[3]}px;
  max-width: 600px;
`;

// export const Label = styled.label`
//   font-weight: 400;
// `;

export const Input = styled(TextField)`
outline: true;
font-size: 16px;
  /* padding: ${theme.space[2]}px; */
  border-radius: ${theme.radii.sm};
  width: 200px;
  background-color: ${theme.colors.background};
`;
