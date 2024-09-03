'use client';

import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
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

const data = {
  facturation: [
    { nom: 'facture_detaillee', valeur: 'N', description: '' },
    { nom: 'always_print_footer', valeur: '1', description: '1:oui, 0:non' },
  ],
  cabinet: [
    { nom: 'cnss', valeur: '4869296', description: 'La CNSS' },
    { nom: 'docteurs', valeur: 'Dr. NASRI Mohammed', description: 'La liste des docteurs séparés par "&"' },
    {
      nom: 'abrevH',
      valeur: 'C.X.A.C.P',
      description: "L'abréviation du cabinet apparaissant dans l'entête des documents",
    },
    {
      nom: 'abrevF',
      valeur: 'C.X.A.C.P',
      description: "L'abréviation du cabinet apparaissant dans le pied de page des documents",
    },
    { nom: 'nom', valeur: "CENTRE XNUMERIK D'ANATOMIE ET DE CYTOLOGIE PATHOLOGIQUE", description: 'Le nom de cabinet' },
    {
      nom: 'adresseFa',
      valeur: '57, Bd Abdelmoumen, Casablanca',
      description: "L'adresse apparaissant dans la facture",
    },
    {
      nom: 'adresseFP',
      valeur: '57, Bd Abdelmoumen, Casablanca',
      description: "L'adresse apparaissant dans la fiche de paillasse",
    },
    { nom: 'tel', valeur: '05 22 20 34 44 / 06 59 25 78 32', description: 'Le téléphone' },
    { nom: 'fax', valeur: '05 22 20 34 43', description: 'Le fax' },
    { nom: 'patente', valeur: '1234567', description: 'La patente' },
    { nom: 'if', valeur: '23456576', description: "L'identifiant fiscal" },
    {
      nom: 'max_datesortie_par_jour',
      valeur: '3;4;5;2;1;20;0',
      description: 'Le maximum de dates de sortie par jour (Lundi;Mardi;Mercredi;...). Mettez -1 pour Non défini',
    },
    {
      nom: 'horaire_semaine',
      valeur: '08h00 à 19h00',
      description: 'Les horaires durant la semaine (ex. 08h00 à 18h30)',
    },
    { nom: 'horaire_samedi', valeur: '08h00 à 14h00', description: "L'horaire du samedi (ex. 08h00 à 13h00)" },
    { nom: 'heure_retrait', valeur: '16h00', description: "L'heure de retrait (ex. 17h00)" },
    { nom: 'ville', valeur: 'Casablanca', description: 'Ville du cabinet' },
    { nom: 'ice', valeur: '0628565827342423', description: "L'ICE du cabinet" },
    { nom: 'RIB', valeur: '023678765463726384729', description: 'Le RIB du cabinet' },
    { nom: 'inpe', valeur: '98357239', description: "L'INPE du cabinet" },
    { nom: 'numero_article', valeur: '', description: "Algérie : numéro d'article" },
    { nom: 'agrement', valeur: '', description: "Algérie : Numéro d'agrément" },
  ],
  cr: [
    {
      nom: 'suivi_demande_cr_valide',
      valeur: '0',
      description: 'Passer la demande en Validation une fois le CR est validé',
    },
  ],
  demande: [{ nom: 'aff_reg_fiche_paill', valeur: 'N', description: '' }],
};

const ParametragePage = () => {
  const [selectedFilter, setSelectedFilter] = useState('facturation');
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [formValue, setFormValue] = useState('');

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    setSelectedItem(null);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setFormValue(item.valeur);
  };

  const handleFormChange = (e) => {
    setFormValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission de formulaire ici
    console.log('Formulaire soumis pour:', selectedItem.nom, 'avec la nouvelle valeur:', formValue);
    setSelectedItem(null);
  };

  const filteredData = data[selectedFilter].filter((item) => item.nom.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 2 }}>
      <Stack spacing={2} sx={{ marginBottom: 2 }}>
        <Typography variant="h5">Facturation</Typography>
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <TextField
            label="Recherche par Nom"
            value={searchText}
            onChange={handleSearchChange}
            size="small"
            sx={{ maxWidth: 200 }}
          />
          <FormControl size="small" sx={{ width: 150 }}>
            <InputLabel>Filtre</InputLabel>
            <Select value={selectedFilter} onChange={handleFilterChange} label="Filtre">
              <MenuItem value="facturation">Facturation</MenuItem>
              <MenuItem value="cabinet">Cabinet</MenuItem>
              <MenuItem value="cr">CR</MenuItem>
              <MenuItem value="demande">Demande</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      {selectedItem && (
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          sx={{ mt: 3, padding: 2, border: '1px solid #ccc', borderRadius: '8px' }}
        >
          <Typography variant="h6" gutterBottom>
            Modifier
          </Typography>
          <Stack spacing={2} direction="column">
            <Stack spacing={2} direction="row" alignItems="center">
              <Typography variant="body1" sx={{ minWidth: '150px' }}>
                Nom:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {selectedItem.nom}
              </Typography>
            </Stack>
            <Stack spacing={2} direction="row" alignItems="center">
              <TextField fullWidth label="Valeur" value={formValue} onChange={handleFormChange} variant="outlined" />
            </Stack>
            <Stack spacing={2} direction="row" justifyContent="flex-end">
              <Button type="submit" variant="contained" color="primary">
                Enregistrer
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#378db7', color: '#fff' }}>
              <TableCell>Nom</TableCell>
              <TableCell>Valeur</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.nom}</TableCell>
                <TableCell>{item.valeur}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditClick(item)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ParametragePage;
