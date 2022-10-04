import { Paper, styled } from '@mui/material';

export const StyledPaper = styled(Paper)`
  display: flex;
  gap: ${p=>p.theme.space[5]}px;
  justify-content: space-between;
  color: ${p=>p.theme.colors.text};
  background-color: transparent;
`;