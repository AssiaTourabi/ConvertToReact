'use client';

import React, { useState } from 'react';
import RouterLink from 'next/link';
import { usePathname } from 'next/navigation';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  CardActions,
  Divider,
  IconButton,
  Paper,
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

import { isNavItemActive } from '@/lib/is-nav-item-active';

const ExamenPage = () => {
  const [formData, setFormData] = useState({
    code: '',
    designation: '',
    prix: '',
    delai: '',
  });

  const [showForm, setShowForm] = useState(false);

  const examensList = [
    { id: 1, code: 'EX001', designation: 'Examen A', prix: '100', delai: '7' },
    { id: 2, code: 'EX002', designation: 'Examen B', prix: '150', delai: '5' },
    { id: 3, code: 'EX003', designation: 'Examen C', prix: '200', delai: '3' },
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
    // Add logic to save or update exam data
  };

  const handleEditExamen = (id) => {
    console.log(`Editing exam with ID ${id}.`);
    // Implement edit exam logic
  };

  const handleDeleteExamen = (id) => {
    console.log(`Deleting exam with ID ${id}.`);
    // Implement delete exam logic
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: 2 }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Liste des Examens
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField label="Code" name="codeSearch" onChange={handleInputChange} size="small" />
          <TextField label="Désignation" name="designationSearch" onChange={handleInputChange} size="small" />
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
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#378db7', color: '#378db7' }}>
              <TableCell>
                <Typography variant="h6">Code</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Désignation</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Prix</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Délai</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {examensList.map((examen) => (
              <TableRow key={examen.id}>
                <TableCell>{examen.code}</TableCell>
                <TableCell>{examen.designation}</TableCell>
                <TableCell>{examen.prix}</TableCell>
                <TableCell>{examen.delai}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button onClick={() => handleEditExamen(examen.id)} variant="outlined" color="primary">
                      <EditIcon />
                    </Button>
                    <Button onClick={() => handleDeleteExamen(examen.id)} variant="outlined" color="secondary">
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
          Télécharger la liste des examens
        </Button>
      </CardActions>
      <Divider sx={{ marginY: 2 }} />

      {/* Formulaire pour ajouter un examen */}
      {showForm && (
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Ajouter / Modifier un Examen
          </Typography>
          <form onSubmit={handleSubmit}>
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
                label="Désignation"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                required
                size="small"
                sx={{ width: '400px' }}
              />
              <TextField
                label="Prix"
                name="prix"
                value={formData.prix}
                onChange={handleInputChange}
                type="number"
                size="small"
                sx={{ width: '400px' }}
              />
              <TextField
                label="Délai"
                name="delai"
                value={formData.delai}
                onChange={handleInputChange}
                type="number"
                size="small"
                sx={{ width: '400px' }}
              />
            </Stack>
            <CardActions sx={{ justifyContent: 'flex-left', marginTop: 2 }}>
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#378db7' }}>
                Enregistrer
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#1c9a8d', marginLeft: '8px' }}>
                Modifier
              </Button>
            </CardActions>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default ExamenPage;
