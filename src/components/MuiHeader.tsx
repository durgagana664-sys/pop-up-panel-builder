import { AppBar, Toolbar, IconButton, Typography, Box, Avatar, Badge } from '@mui/material';
import { Menu as MenuIcon, Notifications, Settings } from '@mui/icons-material';

interface MuiHeaderProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

export function MuiHeader({ onMenuClick }: MuiHeaderProps) {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
          ERP Education Portal
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          
          <IconButton color="inherit">
            <Settings />
          </IconButton>
          
          <Avatar
            sx={{
              width: 36,
              height: 36,
              bgcolor: 'primary.main',
              ml: 1,
            }}
          >
            A
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
