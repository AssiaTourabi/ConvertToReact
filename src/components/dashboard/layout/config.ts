import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Accueil', href:paths.dashboard.demande, icon: 'house' },
  { key: 'customers', title: 'Comptes Rendus', href: '', icon: 'users' ,
   
    items: [
      { key: 'subitem1', title: 'Gestion des CRs', href: paths.dashboard.gestionCr },
      { key: 'subitem1', title: 'Ajout Groupé', href: paths.dashboard.ajoutGroupe },
      { key: 'subitem1', title: 'Statistiques', href: paths.dashboard.statistiquesCR },

    ]

  },
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
  { key: 'settings', title: 'Gestion', href: '', icon: 'gear-six',
    items: [
      { key: 'subitem2', title: 'Activités', href: paths.dashboard.activite },
      { key: 'subitem1', title: 'Comptabilite', href: paths.dashboard.comptabilite },
      { key: 'subitem2', title: "tableaux d'hincoherences", href: paths.dashboard.reporting },
      { key: 'subitem2', title: 'reporting', href: paths.dashboard.reporting},
      { key: 'subitem2', title: 'dashboard', href: paths.dashboard.tableauBord},
    ]
  },
  { 
    key: 'admini', 
    title: 'Administration', 
    icon: 'UserCheck', 
    items: [
      { key: 'subitem1', title: 'Gestion de Compte', href: paths.dashboard.gestionCompte},
      { key: 'subitem2', title: 'Accés et Droits', href: paths.dashboard.acces},
      { key: 'subitem2', title: 'Pramétrage', href: paths.dashboard.parametrage},
     
    ]
  },
  { key: 'error1', title: 'Réaffectation', href: '', icon: 'swap',
    items: [
      { key: 'subitem1', title: 'Demande', href: paths.dashboard.reaffectationDemande },
      { key: 'subitem1', title: 'Facture', href: paths.dashboard.ajoutGroupe },

    ]
   },
  { key: 'utils', title: 'Outils', href: '', icon: 'wrench' ,
    items: [
      { key: 'subitem1', title: 'Gestion Factures', href: paths.dashboard.gestionFactures },
      { key: 'subitem1', title: 'Facturation personalisée', href: paths.dashboard.facturationPersonnalise },
      { key: 'subitem1', title: 'Recherche avancé', href: paths.dashboard.rechercheAvance },
      { key: 'subitem1', title: 'Fusion de medecins', href: paths.dashboard.fusionMedecin },
      { key: 'subitem1', title: 'Modifier Patient', href: paths.dashboard.modifierPatient },

    ]
  },
] satisfies NavItemConfig[];
