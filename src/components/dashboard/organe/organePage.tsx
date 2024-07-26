'use client';

import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import {
  Box,
  Button,
  CardActions,
  Divider,
  IconButton,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

interface OrganeBeanForm {
  id: number;
  code: string;
  nom: string;
  description: string;
}

const OrganePage = () => {
  const pageSize = 6; // Nombre d'éléments par page
  const [page, setPage] = useState(1); // Page actuelle
  const [formData, setFormData] = useState({
    code: '',
    nom: '',
    description: '',
  });
  const [organes, setOrganes] = useState<OrganeBeanForm[]>([
    { id: 1, code: 'ORG1', nom: 'Cœur', description: 'Pompe le sang à travers le système circulatoire' },
    { id: 2, code: 'ORG2', nom: 'Poumons', description: 'Responsable des échanges gazeux lors de la respiration' },
    { id: 3, code: 'ORG3', nom: 'Cerveau', description: 'Centre de contrôle du système nerveux central' },
    { id: 4, code: 'ORG4', nom: 'Foie', description: 'Détoxifie les produits chimiques et métabolise les drogues' },
    { id: 5, code: 'ORG5', nom: 'Reins', description: "Filtre le sang et produit de l'urine" },
    { id: 6, code: 'ORG6', nom: 'Estomac', description: 'Digère les aliments et libère des enzymes' },
    { id: 7, code: 'ORG7', nom: 'Pancréas', description: "Produit de l'insuline et des enzymes digestives" },
    { id: 8, code: 'ORG8', nom: 'Intestins', description: "Absorbe les nutriments et l'eau des aliments" },
    { id: 9, code: 'ORG9', nom: 'Cœur', description: 'Pompe le sang à travers le système circulatoire' },
    { id: 10, code: 'ORG10', nom: 'Vessie', description: "Stocke l'urine avant l'excrétion" },
    { id: 11, code: 'ORG11', nom: 'Rate', description: 'Filtre le sang et stocke les globules rouges' },
    { id: 12, code: 'ORG12', nom: 'Thyroïde', description: 'Régule le métabolisme et produit des hormones' },
    { id: 13, code: 'ORG13', nom: 'Glandes surrénales', description: "Produit des hormones comme l'adrénaline" },
    { id: 14, code: 'ORG14', nom: 'Peau', description: 'Protège le corps des menaces externes' },
    { id: 15, code: 'ORG15', nom: 'Muscles', description: 'Permet le mouvement et soutient la posture' },
    { id: 16, code: 'ORG16', nom: 'Os', description: 'Fournit structure, support et protection' },
    { id: 17, code: 'ORG17', nom: 'Yeux', description: 'Responsable de la vision et de la détection de la lumière' },
    { id: 18, code: 'ORG18', nom: 'Oreilles', description: "Responsable de l'audition et de l'équilibre" },
    { id: 19, code: 'ORG19', nom: 'Dents', description: 'Utilisées pour mordre, mâcher et broyer les aliments' },
    { id: 20, code: 'ORG20', nom: 'Langue', description: 'Aide à goûter et à avaler les aliments' },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addOrgane = (e) => {
    e.preventDefault();
    const newOrgane: OrganeBeanForm = {
      id: organes.length + 1,
      code: formData.code,
      nom: formData.nom,
      description: formData.description,
    };
    setOrganes([...organes, newOrgane]);
    // Réinitialiser les champs du formulaire
    setFormData({ code: '', nom: '', description: '' });
  };

  // Calculer l'index de début et de fin de la page actuelle
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Filtrer les organes en fonction de la pagination
  const paginatedOrganes = organes.slice(startIndex, endIndex);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 2 }}>
      {/* Ligne avec le titre et les champs de recherche */}
      <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: 2 }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Liste des Organes
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField label="Code" name="codeSearch" onChange={handleInputChange} size="small" />
          <TextField label="Nom" name="nomSearch" onChange={handleInputChange} size="small" />
          <IconButton
            onClick={() => setShowForm(!showForm)}
            sx={{
              fontSize: 32,
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: 1,
              boxShadow: 3,
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <Add sx={{ color: '#378db7', fontSize: 32 }} />
          </IconButton>
        </Stack>
      </Stack>
      <Divider sx={{ marginY: 2 }} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#378db7', color: '#fff' }}>
              <TableCell>
                <Typography variant="h6">Code</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Organe</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Description</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOrganes.map((organe) => (
              <TableRow key={organe.id}>
                <TableCell>{organe.code}</TableCell>
                <TableCell>{organe.nom}</TableCell>
                <TableCell>{organe.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CardActions sx={{ justifyContent: 'center', marginY: 2 }}>
        <Pagination
          count={Math.ceil(organes.length / pageSize)}
          page={page}
          onChange={handlePageChange}
          size="large"
          color="primary"
        />
      </CardActions>
      <Divider sx={{ marginY: 2 }} />

      {/* Formulaire pour ajouter un organe */}
      {showForm && (
        <Box>
          <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
            Ajouter un Organe
          </Typography>
          <form onSubmit={addOrgane}>
            <Stack spacing={2}>
              <TextField
                label="Code"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                required
                size="small"
                sx={{ width: '400px' }}
              />
              <TextField
                label="Nom"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                required
                size="small"
                sx={{ width: '400px' }}
              />
              <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                size="small"
                sx={{ width: '400px' }}
              />
            </Stack>
            <CardActions sx={{ justifyContent: 'flex-start', marginTop: 2 }}>
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#378db7' }}>
                Enregistrer
              </Button>
            </CardActions>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default OrganePage;
