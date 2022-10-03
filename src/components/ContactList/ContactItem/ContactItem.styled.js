import { Box, Button, styled, Avatar } from '@mui/material';
import { theme } from 'theme';

export const Info = styled(Box)`
display: flex;
gap: 20px;
align-items: center;
`;

export const StyledWrap = styled(Box)`
display: flex;
gap: ${theme.space[2]}px;
align-items: center;
flex-wrap: wrap;
flex-grow: 1;
min-width: 200px;
`;

export const StyledAvatar = styled(Avatar)`
background-color: ${theme.colors.avatar};
`;

export const StyledButton = styled(Button)`
border-color: ${theme.colors.primary};
background-color: ${theme.colors.primary};
color: ${theme.colors.text};

:hover, :focus {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
    font-weight: 600;
    };
`;