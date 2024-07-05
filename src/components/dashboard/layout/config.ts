import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Accueil', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Comptes Rendus', href: paths.dashboard.customers, icon: 'users' },
  { 
    key: 'integrations', 
    title: 'Paramétrage', 
    icon: 'plugs-connected', 
    items: [
      { key: 'subitem1', title: 'Examen', href: paths.dashboard.integrations + '/subitem1' },
      { key: 'subitem2', title: 'Organismes', href: paths.dashboard.integrations + '/subitem2' },
      { key: 'subitem2', title: 'Médecin', href: paths.dashboard.integrations + '/subitem2' },
    ]
  },
  { key: 'settings', title: 'Gestion', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Administration', href: paths.dashboard.account, icon: 'user' },
  { key: 'error1', title: 'Réaffectation', href: paths.errors.notFound, icon: 'x-square' },
  { key: 'error2', title: 'Utils', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
