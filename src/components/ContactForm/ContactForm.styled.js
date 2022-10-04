import { Button, styled } from '@mui/material';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p=>p.theme.space[2]}px;
  width: 245px;
  padding: ${p=>p.theme.space[4]}px ${p=>p.theme.space[3]}px;
  margin: 0 auto;
  border-radius: ${p=>p.theme.radii.md};
  background-color: ${p=>p.theme.colors.background};
`;

export const Input = styled(Field)`
  border: 1px solid #6f4e37;
  padding: ${p=>p.theme.space[2]}px;
  border-radius: ${p=>p.theme.radii.sm};
  margin-bottom: ${p=>p.theme.space[2]}px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  border-color: ${p=>p.theme.colors.primary};
  background-color: ${p=>p.theme.colors.primary};
  color: ${p=>p.theme.colors.text};
  margin-top: ${p=>p.theme.space[3]}px;

  :hover,
  :focus {
    font-weight: 600;
    background-color: ${p=>p.theme.colors.secondary};
    color: ${p=>p.theme.colors.white};
  }
`;
