import { Box, Button, styled, Avatar } from '@mui/material';

export const StyledWrap = styled(Box)`
display: flex;
gap: ${p=>p.theme.space[2]}px;
align-items: center;
flex-wrap: nowrap;
`;

export const StyledAvatar = styled(Avatar)`
background-color: ${p=>p.theme.colors.avatar};
`;

export const StyledButton = styled(Button)`
border-color: ${p=>p.theme.colors.primary};
background-color: ${p=>p.theme.colors.primary};
color: ${p=>p.theme.colors.text};
width: 100%;

:hover, :focus {
    background-color: ${p=>p.theme.colors.secondary};
    color: ${p=>p.theme.colors.white};
    border-color: ${p=>p.theme.colors.white};
    font-weight: 600;
    };
`;