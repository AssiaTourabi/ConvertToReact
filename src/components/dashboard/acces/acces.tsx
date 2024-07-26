'use client';

import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupIcon from '@mui/icons-material/Group';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; // Alternative for Patient
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import {
  Box,
  Card,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

const sections = [
  {
    title: 'Gestion de Médecin',
    droits: [
      'Lister les médecins',
      'Modifier un médecin',
      'Fusion des médecins',
      'Ajouter un médecin',
      'Supprimer un médecin',
    ],
    pages: ['Médecin'],
    icon: <LocalHospitalIcon />,
  },
  {
    title: 'Gestion de Facture',
    droits: [
      'Facturation',
      'Modifier le montant de la facture après enregistrement',
      'Défacturer',
      'Réaffecter une facture',
      'Facturation Tardive',
    ],
    pages: ['Réaffectation de factures', 'Facturation Personnalisée'],
    icon: <ReceiptIcon />,
  },
  {
    title: 'Gestion de Reporting',
    droits: ['Reporting', 'Consulter les activités', 'Etats Contrôle'],
    pages: ['Reporting', 'Activités', 'Etats de contrôle'],
    icon: <DescriptionIcon />,
  },
  {
    title: 'Gestion de Compte Rendu',
    droits: [
      'Dé-valider un compte rendu validé',
      'Consulter les statistiques des CRs',
      'Gérer les CRs',
      'Publier les CRs',
      'Supprimer un compte rendu validé',
      'Gestion des organes',
      'Valider un compte rendu',
      'Classifier un CR',
      'Envoyer les CRs',
      'Visualiser le compte rendu',
      'Gestion des lesions',
      'Visualiser les CRs non payés',
    ],
    pages: ['Statistiques des CRs', 'Gestion des CRs', 'Organes', 'Ajout multiple des CRs', 'Lesions'],
    icon: <AssignmentIcon />,
  },
  {
    title: 'Gestion de Patient',
    droits: ['Supprimer les Patients'],
    pages: [],
    icon: <HealthAndSafetyIcon />,
  },
  {
    title: 'Gestion de Administration',
    droits: ['Droits Accès', 'Administration'],
    pages: ['Accès et droits', 'Recherche Avancée', 'Administration', 'Gestion des comptes'],
    icon: <GroupIcon />,
  },
  {
    title: 'Gestion de Organisme',
    droits: [
      'Lister les organismes',
      'Modifier un organisme',
      'Fusion des organismes',
      'Gérer les prix spécifiques aux organismes',
      'Gérer les Prescripteurs',
      'Ajouter un organisme',
      'Supprimer un organisme',
    ],
    pages: ['Organismes'],
    icon: <DocumentScannerIcon />,
  },
  {
    title: 'Gestion de Examen',
    droits: [
      'Gérer les Examens',
      'Ajouter un examen',
      'Supprimer un examen',
      'Lister les examens',
      'Modifier un examen',
    ],
    pages: ['Examens'],
    icon: <InsertDriveFileIcon />,
  },
];

const Acces = () => {
  const [openSections, setOpenSections] = React.useState({});

  const handleToggle = (title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ padding: 2, backgroundColor: '#f5f5f5', borderRadius: 1, marginBottom: 2 }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Listes des Droits et Accès
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', marginTop: 1 }}>
          Gestion des droits d'accès et des fonctionnalités par module
        </Typography>
      </Box>

      {sections.map((section) => (
        <Card key={section.title} sx={{ marginBottom: 2, boxShadow: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                {section.icon}
                <Box sx={{ ml: 1 }}>{section.title}</Box>
              </Typography>
              <IconButton onClick={() => handleToggle(section.title)}>
                {openSections[section.title] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
            <Collapse in={openSections[section.title]}>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1">Droits</Typography>
                  <List>
                    {section.droits.map((droit, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <ExpandMoreIcon />
                        </ListItemIcon>
                        <ListItemText primary={droit} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1">Pages</Typography>
                  <List>
                    {section.pages.length > 0 ? (
                      section.pages.map((page, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <ExpandMoreIcon />
                          </ListItemIcon>
                          <ListItemText primary={page} />
                        </ListItem>
                      ))
                    ) : (
                      <ListItem>
                        <ListItemText primary="Aucune page" />
                      </ListItem>
                    )}
                  </List>
                </Box>
              </Box>
            </Collapse>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Acces;
