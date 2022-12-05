import { Paper, styled } from '@mui/material';


export const StyledPaper = styled(Paper)`
  display: flex;
  gap: ${p=>p.theme.spacing(5)};
  justify-content: space-between;
  color: ${p=>p.theme.palette.text.primary};
  background-color: transparent;
`;