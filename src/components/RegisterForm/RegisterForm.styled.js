import { Form, Field } from 'formik';
import { Button, styled } from '@mui/material';
import { theme } from 'theme';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  font-size: 18px; 
  font-weight: 400;
  border-color: ${theme.colors.primary};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  margin-bottom: 15px;

  :hover,
  :focus {
    font-weight: 600;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  }
`;
