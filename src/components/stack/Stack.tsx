import { Typography, Container, Box } from "@mui/material"
import {TbBrandNextjs} from 'react-icons/tb'
import {SiDjango, SiExpress, SiJavascript, SiMui, SiNestjs, SiStrapi, SiTypescript} from 'react-icons/si'
import {DiAngularSimple, DiLinux, DiNodejsSmall, DiPhp, DiPostgresql, DiPython} from 'react-icons/di'
import {GrReactjs} from 'react-icons/gr'
import {FaDocker, FaLaravel} from 'react-icons/fa'
import {BsGit} from 'react-icons/bs'
import Grid from '@mui/material/Unstable_Grid2' 

export default function Stack(){
    return <>
        <Box component="section" id="stack" sx={{scrollMarginTop: (theme) => theme.mixins.toolbar.minHeight}}>
            <Typography variant="h5" component="h5" align="center" mb={4}>
                I am familiar with but not limited to
            </Typography>
            <Container maxWidth="sm">
                <Grid container spacing={3} textAlign="center" justifyContent={"center"}>
                    <Grid xs={4} sm={2}>
                        <TbBrandNextjs size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <SiNestjs size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <SiJavascript size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <DiNodejsSmall size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <SiTypescript size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <GrReactjs size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <DiAngularSimple size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <DiPython size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <FaDocker size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <SiDjango size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <DiPostgresql size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <SiStrapi size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <BsGit size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <SiExpress size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <SiMui size={60}/>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <DiLinux size={60}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
}