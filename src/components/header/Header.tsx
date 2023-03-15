import { Box, Stack, Typography } from "@mui/material";

export default function Header(props: any){
    return <>
        <Box component="section" id="home" sx={{scrollMarginTop: (theme) => theme.mixins.toolbar.minHeight + theme.spacing(3)}}>
            <Stack alignItems="center" spacing={1}>
                <Typography variant="h3" component="h1" align="center">
                    Hi, I'm Stivent Vargas
                </Typography>
                <Typography variant="subtitle1" align="center">
                I'm a Full Stack Software Developer with more than 3 years of professional experience
                </Typography>
            </Stack>
        </Box>
    </>
}