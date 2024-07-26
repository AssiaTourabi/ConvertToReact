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
    
    
  },
  errors: { notFound: '/errors/not-found' },
} as const;
