// app/components/Topbar/Topbar.jsx
import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Box,
    Avatar,
    useTheme
  } from '@mui/material';
  import { Menu as MenuIcon, Notifications, Mail } from '@mui/icons-material';
  
  const Topbar = ({ open, toggleSidebar }) => {
    const theme = useTheme();
  
    return (
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleSidebar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <IconButton color="inherit">
              <Mail />
            </IconButton>
            <Avatar sx={{ bgcolor: 'secondary.main' }}>A</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Topbar;