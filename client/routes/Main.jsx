import * as React from 'react';
// HOOKS
import { useDispatch, useSelector } from 'react-redux';
// REDUCERS
import { TOGGLE_DRAWER, TOGGLE_POST_WINDOW } from '../reducers/forgeReducer';
// MUI STYLES
import CssBaseline from '@mui/material/CssBaseline';
// MUI COMPONENTS
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// CONTAINERS
import AppBarContainer from '../containers/AppBarContainer.jsx';
import DrawerContainer from '../containers/DrawerContainer.jsx';
import PostContainer from '../components/PostContainer';
// COMPONENTS
// import Drawer from '../components/Drawer.jsx';
import PostCreator from '../components/PostCreator.jsx';

// DRAWER subcomponents
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import FunctionsIcon from '@mui/icons-material/Functions';
// import ConstructionIcon from '@mui/icons-material/Construction';
// import GridOnIcon from '@mui/icons-material/GridOn';
// import FilterVintageIcon from '@mui/icons-material/FilterVintage';
// import LogoutIcon from '@mui/icons-material/Logout';

const main = () => {
  const drawerWidth = 360;

  const dispatch = useDispatch();

  // STATE
  const curUser = useSelector(state => state.forge.currentUser);
  const curPage = useSelector(state => state.forge.currentPage);
  const postWindow = useSelector(state => state.forge.newPostWindow);
  const drawerOpen = useSelector(state => state.forge.drawerOpen);

  // open and close CREATE NEW POST window
  const handlePostWindow = () => {
    dispatch(TOGGLE_POST_WINDOW());
  };

  // open and close left drawer
  const toggleDrawer = () => {
    dispatch(TOGGLE_DRAWER());
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarContainer
        drawerOpen={drawerOpen}
        drawerWidth={drawerWidth}
        curPage={curPage}
        curUser={curUser}
        toggleDrawer={toggleDrawer}
        handlePostWindow={handlePostWindow}
      />
      <DrawerContainer
        drawerOpen={drawerOpen}
        drawerWidth={drawerWidth}
        curUser={curUser}
        curPage={curPage}
        toggleDrawer={toggleDrawer}
      />
      {/*<Drawer
        variant='permanent'
        drawerOpen={drawerOpen}
        drawerWidth={drawerWidth}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <Typography
          component='h1'
          variant='h3'
          textAlign='center'
          sx={{ mt: 5 }}>
          {`Welcome`}
        </Typography>
        <Typography component='h1' variant='h3' textAlign='center'>
          {`${curUser.name}`}
        </Typography>
        <List
          component='nav'
          sx={{
            pl: 4,
            mt: 5,
            height: 1,
            justifyContent: 'start',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <ListItemButton
            onClick={() => newPage('Algorithms')}
            sx={{ maxHeight: 75 }}>
            <ListItemIcon>
              <FunctionsIcon />
            </ListItemIcon>
            <ListItemText primary='Algorithms' />
          </ListItemButton>
          <ListItemButton
            onClick={() => newPage('React')}
            sx={{ maxHeight: 75 }}>
            <ListItemIcon>
              <FilterVintageIcon />
            </ListItemIcon>
            <ListItemText primary='React' />
          </ListItemButton>
          <ListItemButton
            onClick={() => newPage('Redux')}
            sx={{ maxHeight: 75 }}>
            <ListItemIcon>
              <GridOnIcon />
            </ListItemIcon>
            <ListItemText primary='Redux' />
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: 75 }}>
            <ListItemIcon>
              <ConstructionIcon />
            </ListItemIcon>
            <ListItemText primary='More to come...' />
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: 75, marginTop: 'auto' }}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Log Out' onClick={handleLogout} />
          </ListItemButton>
        </List>
      </Drawer> */}
      <Box
        component='main'
        sx={{
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}>
        <Container maxWidth='lg' sx={{ mt: 10, mb: 4 }}>
          <Box sx={{ minWidth: 120 }}>
            <PostCreator
              postWindow={postWindow}
              handlePostWindow={handlePostWindow}
              curPage={curPage}
              curUser={curUser}
            />
            <PostContainer />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default main;
