import * as React from 'react';
import RouterLink from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from '@/paths';
import { DynamicLogo } from '@/components/core/logo';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'grid' },
        flexDirection: 'column',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100%',
        backgroundColor: '#c4c7d4',
      }}
    >
      <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
        <Box sx={{ p: 3 }}>
          <Box
            component={RouterLink}
            href={paths.home}
            sx={{ display: 'inline-block', fontSize: 0, marginLeft: '90px', marginTop: '30px' }}
          ></Box>
        </Box>
        <Box sx={{ alignItems: 'left', display: 'flex', flex: '1 1 auto', justifyContent: 'center', p: 3 }}>
          <Box
            sx={{
              maxWidth: '650px',
              width: '100%',
              height: '550px', // Keeping it square
              marginTop: '-60px',
              padding: '50px',
              borderRadius: '20px', // You can adjust the border radius as needed
              marginLeft: '120px',
              boxShadow: '-4px 0px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f1f1ef',
              borderRadius: '30px 0px 0px 30px',
              border: '#5b759e 5px solid',

              // Optional: add some shadow for better appearance
            }}
          >
            <Box
              component={RouterLink}
              href={paths.home}
              sx={{ display: 'inline-block', fontSize: 0, marginLeft: '-20px', marginTop: '-30px' }}
            >
              <DynamicLogo />
            </Box>
            {children}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          alignItems: 'right',
          background: '',
          color: 'var(--mui-palette-common-white)',
          display: { xs: 'none', lg: 'flex' },
          justifyContent: 'right',
          p: 3,
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography align="center" variant="subtitle1"></Typography>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              alt="Widgets"
              src="/assets/auth-widgets.gif"
              sx={{
                height: '550px',
                width: '100%',
                maxWidth: '550px',
                marginRight: '190px',
                marginTop: '0px',
                borderRadius: '0 30px 30px 0',
                border: '#5b759e 5px solid',
                borderLeft: 'none', // You can adjust the border radius as needed
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
