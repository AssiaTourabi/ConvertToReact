import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Tableau de board', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'overview', title: 'Accueil', href:'', icon: 'house' },
  { key: 'customers', title: 'Comptes Rendus', href: '', icon: 'users' },
  { 
    key: 'integrations', 
    title: 'Paramétrage', 
    icon: 'plugs-connected', 
    items: [
      { key: 'subitem1', title: 'Examen', href: paths.dashboard.examen },
      { key: 'subitem2', title: 'Organismes', href: paths.dashboard.organismes },
      { key: 'subitem2', title: 'Médecin', href: paths.dashboard.medecin },
      { key: 'subitem2', title: 'Organe', href: paths.dashboard.organe},
      { key: 'subitem2', title: 'Lésion', href: paths.dashboard.lesion},
    ]
  },
  { key: 'settings', title: 'Gestion', href: '', icon: 'gear-six' },
  { 
    key: 'admini', 
    title: 'Administration', 
    icon: 'plugs-connected', 
    items: [
      { key: 'subitem1', title: 'Gestion de Compte', href: paths.dashboard.gestionCompte},
      { key: 'subitem2', title: 'Accés et Droits', href: paths.dashboard.acces},
     
    ]
  },
  { key: 'error1', title: 'Réaffectation', href: '', icon: 'swap' },
  { key: 'utils', title: 'Outils', href: '', icon: 'wrench' },
] satisfies NavItemConfig[];
