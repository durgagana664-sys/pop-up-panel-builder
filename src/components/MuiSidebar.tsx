import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Divider,
} from '@mui/material';
import {
  Dashboard,
  People,
  DirectionsBus,
  Payment,
  ExpandLess,
  ExpandMore,
  Download,
  LocalActivity,
  Settings as SettingsIcon,
  Receipt,
  AttachMoney,
  Assignment,
  AccountBalance,
  Folder,
  Description,
  MonetizationOn,
  ListAlt,
} from '@mui/icons-material';

interface MuiSidebarProps {
  open: boolean;
  collapsed: boolean;
  onToggle: () => void;
  onClose: () => void;
  drawerWidth: number;
}

export function MuiSidebar({ open, collapsed, onClose, drawerWidth }: MuiSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [openTransport, setOpenTransport] = useState(false);
  const [openFee, setOpenFee] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      onClose();
    }
  };

  const mainItems = [
    { title: 'Dashboard', icon: <Dashboard />, path: '/' },
    { title: 'Student Activity', icon: <LocalActivity />, path: '/student-activity' },
    { title: 'Parent Activity', icon: <People />, path: '/parent-activity' },
  ];

  const transportItems = [
    { title: 'Transport Basics', path: '/transport/basics' },
    { title: 'Vehicles', path: '/transport/vehicles' },
    { title: 'Routes', path: '/transport/routes' },
    { title: 'Stops', path: '/transport/stops' },
    { title: 'Vehicle Trip Mapping', path: '/transport/vehicle-trip' },
    { title: 'Student Route Mapping', path: '/transport/student-route' },
  ];

  const feeItems = [
    { title: 'Fee Configuration', path: '/fee/configuration' },
    { title: 'Fee Basics', path: '/fee/basics' },
    { title: 'Class-wise Fee', path: '/fee/class-wise' },
    { title: 'Student-wise Fee', path: '/fee/student-wise' },
    { title: 'Student Class & Fee Schedule Mapper', path: '/fee/schedule-mapper' },
    { title: 'Refund Fee', path: '/fee/refund' },
    { title: 'Fee Receipts', path: '/fee/receipts' },
    { title: 'Pending Cheques', path: '/fee/pending-cheques' },
    { title: 'Fee Invoice', path: '/fee/invoice' },
    { title: 'Fee Reports', path: '/fee/reports' },
  ];

  const downloadItems = [
    { title: 'Student Download Status', icon: <Download />, path: '/download-stats/student' },
    { title: 'Parent Download Status', icon: <Download />, path: '/download-stats/parent' },
    { title: 'Staff Download Status', icon: <Download />, path: '/download-stats/staff' },
  ];

  const drawerContent = (
    <Box sx={{ overflow: 'auto', height: '100%' }}>
      {!collapsed && (
        <>
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>
              ERP Portal
            </Typography>
          </Box>
          <Divider />
        </>
      )}

      <List sx={{ pt: 2 }}>
        {mainItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={isActive(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: collapsed ? 'center' : 'initial',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed ? 0 : 3,
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!collapsed && <ListItemText primary={item.title} />}
            </ListItemButton>
          </ListItem>
        ))}

        <Divider sx={{ my: 1 }} />

        {/* Transport Section */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setOpenTransport(!openTransport)}
            sx={{
              minHeight: 48,
              justifyContent: collapsed ? 'center' : 'initial',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: collapsed ? 0 : 3,
                justifyContent: 'center',
              }}
            >
              <DirectionsBus />
            </ListItemIcon>
            {!collapsed && (
              <>
                <ListItemText primary="Transport" />
                {openTransport ? <ExpandLess /> : <ExpandMore />}
              </>
            )}
          </ListItemButton>
        </ListItem>
        {!collapsed && (
          <Collapse in={openTransport} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {transportItems.map((item) => (
                <ListItemButton
                  key={item.title}
                  onClick={() => handleNavigation(item.path)}
                  selected={isActive(item.path)}
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary={item.title} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        )}

        {/* Fee Management Section */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setOpenFee(!openFee)}
            sx={{
              minHeight: 48,
              justifyContent: collapsed ? 'center' : 'initial',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: collapsed ? 0 : 3,
                justifyContent: 'center',
              }}
            >
              <Payment />
            </ListItemIcon>
            {!collapsed && (
              <>
                <ListItemText primary="Fee Management" />
                {openFee ? <ExpandLess /> : <ExpandMore />}
              </>
            )}
          </ListItemButton>
        </ListItem>
        {!collapsed && (
          <Collapse in={openFee} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {feeItems.map((item) => (
                <ListItemButton
                  key={item.title}
                  onClick={() => handleNavigation(item.path)}
                  selected={isActive(item.path)}
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary={item.title} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        )}

        <Divider sx={{ my: 1 }} />

        {downloadItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={isActive(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: collapsed ? 'center' : 'initial',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed ? 0 : 3,
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!collapsed && <ListItemText primary={item.title} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid',
          borderColor: 'divider',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}
