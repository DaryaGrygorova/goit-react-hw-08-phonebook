import { Typography, styled } from '@mui/material';

export const StyledMessage = styled(Typography)`
   display: block;
    text-align: center;
    margin: 0 auto ${p => p.theme.spacing(4)};
    color: ${p => p.children ? 'red' : p.theme.palette.text.primary};
`;

