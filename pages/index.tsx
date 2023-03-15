import {Box, Container, Fab} from '@mui/material'
import Copyright from '../src/components/copyright/Copyright'
import NavBar from '../src/components/navbar/Navbar'
import ScrollTop from '../src/components/BackToTop/BackToTop'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Header from '../src/components/header/Header'
import About from '../src/components/about/About'
import Stack from '../src/components/stack/Stack'
import Footer from '../src/components/footer/Footer'
import { styled } from '@mui/system'
import Work from '../src/components/work/Work'
import HideOnScroll from '../src/components/hideOnScroll/hideOnScroll'
import { useRef } from 'react'

const Item = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));

export default function Home() {
  const navRef = useRef(null);

  return (
    <>
      <HideOnScroll>
        <NavBar ref={navRef}/>
      </HideOnScroll>
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
