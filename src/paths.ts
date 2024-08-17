import Reporting from "./components/dashboard/reporting/reportingPage";

export const paths = {
  home: '/',
   landingPage:'/dashboard/landingPage',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
    organismes: '/dashboard/organisme',
    examen:'/dashboard/examen',
    medecin:'/dashboard/medecin',
    organe:'/dashboard/organe',
    gestionCompte:'/dashboard/gestionCompte',
    acces:'/dashboard/acces',
    lesion:'/dashboard/lesion',
    parametrage:'/dashboard/parametrage',
    gestionCr:'/dashboard/gestioncr',
    ajoutGroupe:'/dashboard/ajoutGroupe',
    reaffectationDemande:'/dashboard/ReaffectationDemande',
    gestionFactures:'/dashboard/gestionFacture',
    facturationPersonnalise:'/dashboard/facturationPersonnalise',
    rechercheAvance:'/dashboard/rechercheAvance',
    fusionMedecin:'/dashboard/rechercheAvanceMedecin',
    comptabilite:'/dashboard/comptabilite',
    modifierPatient:'/dashboard/modifierPatient',
    statistiquesCR:'/dashboard/statistiqueCR',
    activite:'/dashboard/activite',
    reporting:'/dashboard/reporting',
    tableauBord:'/dashboard/tableauBord',
    demande:'/dashboard/demande'
    
    
  },
  errors: { notFound: '/errors/not-found' },
} as const;
