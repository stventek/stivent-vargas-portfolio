import MuiLink from '@mui/material/Link'
import { Box, Button, Divider, Stack, Typography } from "@mui/material"
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

export default function Footer(props: any){
    return <>
        <Box component="footer" id="contact" sx={{scrollMarginTop: (theme) => theme.mixins.toolbar.minHeight}}>
            <Stack flexWrap="wrap" spacing={1} alignItems="center" justifyContent="center" direction={{ xs: 'column', sm: 'row' }}>
                <Button LinkComponent={MuiLink} rel="noopener noreferrer" href="mailto:stiventvargas09@gmail.com" variant="outlined">Get in touch </Button>
                <Divider flexItem  orientation="vertical"/>
                <AiFillLinkedin size={20}/>
                <MuiLink display="block" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/stivent-vargas-dev">LinkedIn</MuiLink>
                <AiFillGithub size={20}/>
                <MuiLink display="block" rel="noopener noreferrer" target="_blank" href="https://github.com/xenizs">Github</MuiLink>
                <SiGmail size={20}/>
                <MuiLink display="block" rel="noopener noreferrer" href="mailto:stiventvargas09@gmail.com">Email</MuiLink>
            </Stack>
        </Box>
    </>
}