import { Box, Button, styled, Avatar } from '@mui/material';
import { theme } from 'theme';

export const StyledWrap = styled(Box)`
display: flex;
gap: ${theme.space[2]}px;
align-items: center;
flex-wrap: nowrap;
`;

export const StyledAvatar = styled(Avatar)`
background-color: ${theme.colors.avatar};
`;

export const StyledButton = styled(Button)`
border-color: ${theme.colors.primary};
background-color: ${theme.colors.primary};
color: ${theme.colors.text};
width: 100%;

:hover, :focus {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
    font-weight: 600;
    };
`;