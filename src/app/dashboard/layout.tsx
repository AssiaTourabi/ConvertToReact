import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';

import { AuthGuard } from '@/components/auth/auth-guard';
import { MainNav } from '@/components/dashboard/layout/main-nav';
import { SideNav } from '@/components/dashboard/layout/side-nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AuthGuard>
      <GlobalStyles
        styles={{
          body: {
            '--MainNav-height': '56px',
            '--MainNav-zIndex': 1000,
            '--SideNav-width': '280px',
            '--SideNav-zIndex': 1100,
            '--MobileNav-width': '320px',
            '--MobileNav-zIndex': 1100,
          },
        }}
      />
      <Box
        sx={{
          bgcolor: '#f1f1ee',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minHeight: '100vh',
          pb: '64px', // Ajout de padding en bas
        }}
      >
        <SideNav />
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            pl: { lg: 'var(--SideNav-width)' },
          }}
        >
          <MainNav />
          <main>
            <Container
              maxWidth="xl"
              sx={{
                py: '64px',
                backgroundColor: 'none',
                width: '990px',
                borderRadius: '25px',
                minHeight: 'calc(100vh - var(--MainNav-height) - 128px)', // Assurer un minimum de hauteur
                pb: '64px', // Ajout de padding en bas pour le container
              }}
            >
              {children}
            </Container>
          </main>
        </Box>
      </Box>
    </AuthGuard>
  );
};

export default Layout;
