import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Copyright from '../src/components/copyright/Copyright'
import NavBar from '../src/components/navbar/Navbar'
import { Fab } from '@mui/material'
import ScrollTop from '../src/components/BackToTop/BackToTop'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Header from '../src/components/header/Header'
import About from '../src/components/about/About'
import Stack from '../src/components/stack/Stack'
import Footer from '../src/components/footer/Footer'
import { styled } from '@mui/system'
import Work from '../src/components/work/Work'

const Item = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));

export default function Home() {
  return (
    <>
      <NavBar/>
      <Container maxWidth="lg">
        <Box component="main" sx={{ p: 3 }}>
          <Item><Header/></Item>
          <Item><About/></Item>
          <Item><Work/></Item>
          <Item><Stack/></Item>
          <Item><Footer/></Item>
          <Item sx={{mb: 0}}><Copyright/></Item>
        </Box>
      </Container>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}
