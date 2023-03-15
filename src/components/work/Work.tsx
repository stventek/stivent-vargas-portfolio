import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import MuiLink from '@mui/material/Link'
import worksData from '../../../data/works.json'

interface WorkCardProps{
    title: string,
    preview: string,
    description: string,
    source: string
}

function WorkCard(props : WorkCardProps){
    return <>
        <Card sx={{ maxWidth: 345 }} elevation={0}>
            <CardActionArea LinkComponent={MuiLink} rel="noopener noreferrer" target="_blank" href={props.source}>
                <CardMedia
                component="img"
                height="140"
                image={props.preview}
                alt="project preview"
                />
                <CardContent sx={{height: 150}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
}

export default function Work(props: any){
    return <>
        <Box id="work" component="section" sx={{scrollMarginTop: (theme) => theme.mixins.toolbar.minHeight}}>
            <Typography variant="h4" component="h1" align="center" mb={3}>
                Works
            </Typography> 
            <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {worksData.map((e) => 
                            (<Box m={1} key={e.title}>
                                <WorkCard {...e}/>
                            </Box>))}    
            </Box>
        </Box>
    </>
}
