import { Button, styled } from '@mui/material';
import { Form, Field } from 'formik';
import { theme } from 'theme';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[2]}px;
  width: 220px;
  padding: ${theme.space[4]}px ${theme.space[3]}px;
  margin: 0 auto;
  border-radius: ${theme.radii.md};
  background-color: ${theme.colors.background};
`;

// export const Label = styled.label`
// font-weight: 700;
// `;

export const Input = styled(Field)`
  border: 1px solid #6f4e37;
  padding: ${theme.space[2]}px;
  border-radius: ${theme.radii.sm};
  margin-bottom: ${theme.space[2]}px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  border-color: ${theme.colors.primary};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  margin-top: ${theme.space[3]}px;

  :hover,
  :focus {
    font-weight: 600;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  }
`;
