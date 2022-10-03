import { Form, Field } from 'formik';
import { Button, styled } from '@mui/material';
import { theme } from 'theme';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[2]}px;
  margin: 0 auto;
  max-width: 600px;
`;

// export const Label = styled.label`
//   font-size: 24px;
//   font-weight: 700;
// `;

export const Input = styled(Field)`
  height: 2rem;
  border: 1px solid #6f4e37;
  border-radius: ${theme.radii.sm};
  padding: ${theme.space[2]}px;
  margin-bottom: ${theme.space[2]}px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  border-color: ${theme.colors.primary};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  margin-top: ${theme.space[3]}px;
  margin-bottom: ${theme.space[4]}px;

  :hover,
  :focus {
    font-weight: 600;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  }
`;
