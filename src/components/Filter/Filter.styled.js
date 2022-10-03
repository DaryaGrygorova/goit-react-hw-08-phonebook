import { Box, styled as styledMui } from '@mui/material';
import  styled from "styled-components";
import { theme } from 'theme';

export const Form = styledMui(Box)`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[3]}px;
  max-width: 600px;
`;

// export const Label = styled.label`
//   font-weight: 400;
// `;

export const Input = styled.input`
  border: 1px solid #6f4e37;
  padding: ${theme.space[2]}px;
  border-radius: ${theme.radii.sm};
  width: 200px;
`;
