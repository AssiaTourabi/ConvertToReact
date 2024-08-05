import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  CardContent,
  createTheme,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';

const modifierPatient = () => {
  const [formPatient, setFormPatient] = useState({
    code: '',
  });

  // Gestionnaire de changement pour les champs de formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormPatient({
      ...formPatient,
      [name]: value,
    });
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    console.log('Form Data:', formPatient); // Afficher les données du formulaire dans la console
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" component="div" sx={{ m: 2 }}>
        Simple Form
      </Typography>

      {/* Champ de texte pour le nom */}
      <TextField label="Code" variant="outlined" name="code" value={formPatient.code} onChange={handleChange} />

      <Button variant="contained" type="submit" sx={{ m: 2 }}>
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default modifierPatient;
