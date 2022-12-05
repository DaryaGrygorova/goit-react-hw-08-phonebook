import { Box, Button, Avatar, styled } from '@mui/material';

export const StyledWrap = styled(Box)`
display: flex;
gap: ${p=>p.theme.spacing(2)};
align-items: center;
flex-wrap: nowrap;
`;

export const StyledAvatar = styled(Avatar)`
background-color: ${p=>p.theme.palette.text.secondary};
`;

export const StyledButton = styled(Button)`
border-color: ${p=>p.theme.palette.primary.main};
background-color: ${p=>p.theme.palette.primary.main};
color: ${p=>p.theme.palette.text.primary};
width: 100%;

:hover, :focus {
    background-color: ${p=>p.theme.palette.secondary.main};
    color: ${p=>p.theme.palette.common.white};
    border-color: ${p=>p.theme.palette.common.white};
    font-weight: 600;
    };
`;