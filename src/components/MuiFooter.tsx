import { Box, Container, Typography, Link } from '@mui/material';

export function MuiFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2025 ERP Education Portal. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="#"
              color="text.secondary"
              underline="hover"
              variant="body2"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              color="text.secondary"
              underline="hover"
              variant="body2"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              color="text.secondary"
              underline="hover"
              variant="body2"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              Support
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
