import { Paper, Typography, styled } from '@mui/material';

export const StyledPaper = styled(Paper)`
  background-color: ${p=>p.theme.palette.background.default};
  padding: ${p=>p.theme.spacing(4)};
  text-indent: ${p=>p.theme.spacing(4)};
  font-style: italic ;
  border-radius: ${p=>p.theme.spacing(3)};
  max-width: 245px;
`;

export const StyledParagraph = styled(Typography)``;
