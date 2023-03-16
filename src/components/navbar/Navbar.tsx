import * as React from 'react';
import {Box, Toolbar, Typography, Button, Container, 
  Link as MuiLink,AppBar, Divider, Drawer, 
  IconButton, List, ListItem, ListItemButton, ListItemText, styled} 
  from '@mui/material'
import {Menu as MenuIcon} from '@mui/icons-material'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Stack', 'Work','Contact'];

const ItemButton = styled(Button)(({theme}) => ({
  position: 'relative',
  '&.MuiButtonBase-root:hover': {backgroundColor: 'transparent'},
  '&::before': {
    content: "''",
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 2,
    backgroundColor: theme.palette.primary.main,
    transition: 'transform 0.5s ease',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
  },
  '&:hover::before': {
    transform: 'scaleX(1)',
  },
}))

function NavBar(props: any, ref: React.Ref<any>) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Stivent Vargas
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} LinkComponent={MuiLink} href={`#${item.toLowerCase()}`}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar ref={ref} component="nav" elevation={0} enableColorOnDark color="transparent" sx={{backdropFilter:"blur(20px)"}}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Stivent Vargas
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <ItemButton  disableRipple disableTouchRipple key={item} LinkComponent={MuiLink} href={`#${item.toLowerCase()}`}>
                  {item}
                </ItemButton>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          elevation={0} 
          PaperProps={{sx: {backgroundColor: '#112240'}}}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar id="back-to-top-anchor"/>
    </Box>
  );
}

export default React.forwardRef(NavBar)