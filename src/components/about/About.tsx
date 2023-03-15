import MuiLink from '@mui/material/Link'
import { Box, Button, Stack, Typography } from "@mui/material"

export default function About(props: any){
    return <>
        <Box component="section" id="about" sx={{scrollMarginTop: (theme) => theme.mixins.toolbar.minHeight}}>
            <Stack alignItems="center" spacing={3}>
                <Typography variant="h4" component="h1" align="center">
                    About
                </Typography> 
                <Typography>
                    As a skilled software developer, I carry over more than three years of professional experience.
                    I enjoy learning and thinking outside the box to push things forward. 
                    I'm all about finding practical and efficient solutions that fit the situation at hand.
                    I have a passion for developing high-quality software solutions using agile methodologies. 
                    As a full-stack, I've had the opportunity to take part on a broad range of development projects. 
                    I'm very dedicated and hardworking, and I'm always looking for ways to make my work better. 
                    I'm adaptable, I work hard, and I'm all about technology. I always want to make a difference in every project I take on.
                </Typography>
                <Button LinkComponent={MuiLink} target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1kGW-bZ-iEaW-b1H7Qeoe8LLz_Kbkud6_ateMPtDstTE" variant="contained">Curriculum </Button>
            </Stack>
        </Box>
    </>
}