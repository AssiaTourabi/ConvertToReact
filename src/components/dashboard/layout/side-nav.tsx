'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { usePathname } from 'next/navigation';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';
import { isNavItemActive } from '@/lib/is-nav-item-active';
import { Logo } from '@/components/core/logo';

import { navItems } from './config';
import { navIcons } from './nav-icons';

export function SideNav(): React.JSX.Element {
  const pathname = usePathname();
  const [openKey, setOpenKey] = React.useState<string | null>(null);

  const handleToggle = (key: string) => {
    setOpenKey((prevOpenKey) => (prevOpenKey === key ? null : key));
  };

  return (
    <Box
      sx={{
        '--SideNav-background': '#536e92',
        '--SideNav-color': 'white',
        '--NavItem-color': 'var(--mui-palette-neutral-300)',
        '--NavItem-hover-background': 'white',
        '--NavItem-active-background': '#f1f1ef',
        '--NavItem-active-color': '#546f92',
        '--NavItem-disabled-color': 'var(--mui-palette-neutral-500)',
        '--NavItem-icon-color': 'white',
        '--NavItem-icon-active-color': '#546f92',
        '--NavItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
        bgcolor: '#11425F',
        color: 'red',
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        height: '99%',
        left: 0,
        maxWidth: '100%',
        position: 'fixed',
        scrollbarWidth: 'none',
        top: 0,
        width: 'var(--SideNav-width)',
        zIndex: 'var(--SideNav-zIndex)',
        '&::-webkit-scrollbar': { display: 'none' },
        borderRadius: '0 20px 20px 0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowY: 'auto',
        maxHeight: '100vh',
      }}
    >
      {/* Make the Stack with the logo sticky */}
      <Stack spacing={2} sx={{ p: 3, position: 'sticky', top: 0, zIndex: 1 }}>
        <Box
          component={RouterLink}
          href={paths.home}
          sx={{ display: 'inline-flex', marginLeft: '25%', marginTop: '-4%' }}
        >
          <Logo color="light" height={70} width={100} />
        </Box>
      </Stack>

      <Box component="nav" sx={{ flex: '1 1 auto', p: '12px' }}>
        {renderNavItems({ pathname, items: navItems, openKey, handleToggle })}
      </Box>

      <Stack spacing={2} sx={{ p: '12px' }}></Stack>
    </Box>
  );
}

function renderNavItems({
  items = [],
  pathname,
  openKey,
  handleToggle,
}: {
  items?: NavItemConfig[];
  pathname: string;
  openKey: string | null;
  handleToggle: (key: string) => void;
}): React.JSX.Element {
  const children = items.reduce((acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
    const { key, ...item } = curr;

    if (item.items) {
      acc.push(
        <NavItemWithDropdown key={key} pathname={pathname} openKey={openKey} handleToggle={handleToggle} {...item} />
      );
    } else {
      acc.push(<NavItem key={key} pathname={pathname} {...item} />);
    }

    return acc;
  }, []);

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 1, p: 1 }}>
      {children}
    </Stack>
  );
}

interface NavItemProps extends Omit<NavItemConfig, 'items'> {
  pathname: string;
}

function NavItem({ disabled, external, href, icon, matcher, pathname, title }: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({ disabled, external, href, matcher, pathname });
  const Icon = icon ? navIcons[icon] : null;

  return (
    <li>
      <Box
        component={external ? 'a' : RouterLink}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          color: 'var(--NavItem-color)',
          cursor: 'pointer',
          display: 'flex',
          flex: '0 0 auto',
          gap: 4,
          p: '4px 10px',
          position: 'relative',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          ...(disabled && {
            bgcolor: 'var(--NavItem-disabled-background)',
            color: 'var(--NavItem-disabled-color)',
            cursor: 'not-allowed',
          }),
          ...(active && { bgcolor: 'var(--NavItem-active-background)', color: 'var(--NavItem-active-color)' }),
        }}
      >
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
          {Icon ? (
            <Icon
              fill={active ? 'var(--NavItem-icon-active-color)' : 'var(--NavItem-icon-color)'}
              fontSize="var(--icon-fontSize-md)"
              weight={active ? 'fill' : undefined}
            />
          ) : null}
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <Typography
            component="span"
            sx={{
              color: 'inherit',
              fontSize: '0.875rem',
              fontWeight: 500,
              lineHeight: '28px',
              fontFamily: 'OCR A Std, monospace',
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </li>
  );
}

interface NavItemWithDropdownProps extends NavItemConfig {
  pathname: string;
  openKey: string | null;
  handleToggle: (key: string) => void;
}

function NavItemWithDropdown({
  disabled,
  external,
  href,
  icon,
  matcher,
  pathname,
  title,
  items,
  openKey,
  handleToggle,
}: NavItemWithDropdownProps): React.JSX.Element {
  const key = title; // Ensure this key is unique for each dropdown
  const open = openKey === key;
  const active = isNavItemActive({ disabled, external, href, matcher, pathname });
  const Icon = icon ? navIcons[icon] : null;

  return (
    <>
      <li>
        <Box
          onClick={() => handleToggle(key)}
          sx={{
            alignItems: 'center',
            borderRadius: 1,
            color: 'var(--NavItem-color)',
            cursor: 'pointer',
            display: 'flex',
            flex: '0 0 auto',
            gap: 4,
            p: '4px 10px',
            position: 'relative',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            ...(disabled && {
              bgcolor: 'var(--NavItem-disabled-background)',
              color: 'var(--NavItem-disabled-color)',
              cursor: 'not-allowed',
            }),
            ...(active && { bgcolor: 'var(--NavItem-active-background)', color: 'var(--NavItem-active-color)' }),
          }}
        >
          <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
            {Icon ? (
              <Icon
                fill={active ? 'var(--NavItem-icon-active-color)' : 'var(--NavItem-icon-color)'}
                fontSize="var(--icon-fontSize-md)"
                weight={active ? 'fill' : undefined}
              />
            ) : null}
          </Box>
          <Box sx={{ flex: '1 1 auto' }}>
            <Typography
              component="span"
              sx={{
                color: 'inherit',
                fontSize: '0.875rem',
                fontWeight: 500,
                lineHeight: '28px',
                fontFamily: 'OCR A Std, monospace',
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: '0 0 auto',
              marginLeft: 'auto', // Push the icon to the far right
              paddingRight: '16px', // Ensure a consistent gap from the right edge
            }}
          >
            {open ? <ExpandLess /> : <ExpandMore />}
          </Box>
        </Box>
      </li>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack component="ul" spacing={1} sx={{ listStyle: 'none', pl: 4 }}>
          {items.map((subItem) => (
            <NavItem key={subItem.key} pathname={pathname} {...subItem} />
          ))}
        </Stack>
      </Collapse>
    </>
  );
}
