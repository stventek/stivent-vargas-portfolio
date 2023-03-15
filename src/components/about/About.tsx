import MuiLink from '@mui/material/Link'
import { Box, Button, Stack, Typography } from "@mui/material"
import aboutData from '../../../data/about.json'

export default function About(props: any){
    return <>
        <Box component="section" id="about" sx={{scrollMarginTop: (theme) => theme.mixins.toolbar.minHeight}}>
            <Stack alignItems="center" spacing={3}>
                <Typography variant="h4" component="h1" align="justify">
                    About
                </Typography> 
                <Typography paragraph align='justify'>
                    {aboutData.description}
                </Typography>
                <Button sx={{px: 2, py: 1}} variant="outlined" LinkComponent={MuiLink} target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1kGW-bZ-iEaW-b1H7Qeoe8LLz_Kbkud6_ateMPtDstTE">Curriculum </Button>
            </Stack>
        </Box>
    </>
}