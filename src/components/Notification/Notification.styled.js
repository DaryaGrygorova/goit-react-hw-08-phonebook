import { theme } from 'theme';
import { Typography, styled } from '@mui/material';

export const StyledMessage = styled(Typography)`
   display: block;
    text-align: center;
    margin: 0 auto ${theme.space[4]}px;
`;

