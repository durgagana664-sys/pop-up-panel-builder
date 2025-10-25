import { ReactNode, useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { MuiHeader } from "./MuiHeader";
import { MuiSidebar } from "./MuiSidebar";
import { MuiFooter } from "./MuiFooter";

interface LayoutProps {
  children: ReactNode;
}

const DRAWER_WIDTH = 280;
const DRAWER_WIDTH_COLLAPSED = 80;

export function MuiLayout({ children }: LayoutProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  const drawerWidth = sidebarCollapsed ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <MuiSidebar
        open={sidebarOpen}
        collapsed={sidebarCollapsed}
        onToggle={handleSidebarToggle}
        onClose={() => setSidebarOpen(false)}
        drawerWidth={drawerWidth}
      />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          ml: { xs: 0, md: sidebarOpen ? `${drawerWidth}px` : 0 },
          transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <MuiHeader 
          onMenuClick={handleSidebarToggle}
          sidebarOpen={sidebarOpen}
        />
        
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: 'background.default',
          }}
        >
          {children}
        </Box>
        
        <MuiFooter />
      </Box>
    </Box>
  );
}
