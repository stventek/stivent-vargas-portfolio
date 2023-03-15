import { Box, Stack, Typography } from "@mui/material";
import headerData from '../../../data/header.json'

export default function Header(props: any){
    return <>
        <Box component="section" id="home" sx={{scrollMarginTop: (theme) => theme.mixins.toolbar.minHeight + theme.spacing(3)}}>
            <Stack alignItems="center" spacing={1}>
                <Typography variant="h3" component="h1" align="center">
                    {headerData.title}
                </Typography>
                <Typography variant="subtitle1" align="center">
                    {headerData.subtitle}
                </Typography>
            </Stack>
        </Box>
    </>
}