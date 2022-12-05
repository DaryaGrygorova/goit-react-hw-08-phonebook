import { Typography, styled } from '@mui/material';

export const StyledMessage = styled(Typography)`
   display: block;
    text-align: center;
    margin: 0 auto ${p => p.theme.space[4]}px;
    color: ${p => p.children ? 'red' : p.theme.colors.text};
`;

