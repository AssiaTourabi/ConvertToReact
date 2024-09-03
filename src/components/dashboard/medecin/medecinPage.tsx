'use client';

import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  CardActions,
  Divider,
  IconButton,
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
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';

const MedecinPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    specialite: '',
    tel: '',
    email: '',
    adresse: '',
  });

  const [showForm, setShowForm] = useState(false);

  const medecinsList = [
    {
      id: 1,
      nom: 'Assia Tourabi',
      specialite: 'Cardiologist',
      tel: '123456789',
      email: 'assia@example.com',
      adresse: 'Khouribga',
    },
    {
      id: 2,
      nom: 'Ahmed AHMED',
      specialite: 'Dermatologist',
      tel: '987654321',
      email: 'Ahmed@example.com',
      adresse: 'Rabat',
    },
    {
      id: 3,
      nom: 'Salma Salma',
      specialite: 'Neurologist',
      tel: '567890123',
      email: 'Salma@example.com',
      adresse: 'CasaBlanca',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to save or update medecin data
  };

  const handleEditMedecin = (id) => {
    console.log(`Editing medecin with ID ${id}.`);
    // Implement edit medecin logic
  };

  const handleDeleteMedecin = (id) => {
    console.log(`Deleting medecin with ID ${id}.`);
    // Implement delete medecin logic
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 2 }}>
      {/* Ligne avec le titre et les champs de recherche */}
      <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: 2 }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Liste des Médecins
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField label="Nom" name="nomSearch" onChange={handleInputChange} size="small" />
          <TextField label="Spécialité" name="specialiteSearch" onChange={handleInputChange} size="small" />
          <IconButton
            color="primary"
            onClick={toggleForm}
            sx={{
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: 1,
              '&:hover': {
                backgroundColor: 'white',
              },
            }}
          >
            <AddIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Stack>
      </Stack>
      <Divider sx={{ marginY: 2 }} />
      {showForm && (
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Ajouter / Modifier un Médecin
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
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
                label="Spécialité"
                name="specialite"
                value={formData.specialite}
                onChange={handleInputChange}
                required
                size="small"
                sx={{ width: '400px' }}
              />
              <TextField
                label="Téléphone"
                name="tel"
                value={formData.tel}
                onChange={handleInputChange}
                size="small"
                sx={{ width: '400px' }}
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                size="small"
                sx={{ width: '400px' }}
              />
              <TextField
                label="Adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleInputChange}
                size="small"
                sx={{ width: '400px' }}
              />
            </Stack>
            <CardActions sx={{ justifyContent: 'flex-start', marginTop: 2 }}>
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#378db7' }}>
                Enregistrer
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#1c9a8d', marginLeft: '8px' }}>
                Modifier
              </Button>
            </CardActions>
          </form>
          <Divider sx={{ marginY: 2 }} />
        </Box>
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#378db7', color: '#ffffff' }}>
              <TableCell>
                <Typography variant="h6">Nom</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Spécialité</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Téléphone</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Email</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Adresse</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medecinsList.map((medecin) => (
              <TableRow key={medecin.id}>
                <TableCell>{medecin.nom}</TableCell>
                <TableCell>{medecin.specialite}</TableCell>
                <TableCell>{medecin.tel}</TableCell>
                <TableCell>{medecin.email}</TableCell>
                <TableCell>{medecin.adresse}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button onClick={() => handleEditMedecin(medecin.id)} variant="outlined" color="primary">
                      <EditIcon />
                    </Button>
                    <Button onClick={() => handleDeleteMedecin(medecin.id)} variant="outlined" color="secondary">
                      <DeleteIcon />
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" startIcon={<DownloadIcon />} sx={{ backgroundColor: '#61afd8' }}>
          Télécharger la liste des médecins
        </Button>
      </CardActions>
      <Divider sx={{ marginY: 2 }} />

      {/* Formulaire pour ajouter ou modifier un médecin */}
    </Box>
  );
};

export default MedecinPage;
