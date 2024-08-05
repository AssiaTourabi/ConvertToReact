'use client';

import React, { useState } from 'react';
import { Alert, Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

const GestionFactures: React.FC = () => {
  const [dateDebut, setDateDebut] = useState<Date | null>(null);
  const [dateFin, setDateFin] = useState<Date | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
    console.log('Date de début:', dateDebut);
    console.log('Date de fin:', dateFin);

    // Afficher le message de confirmation
    setMessage("La régénération des factures s'est faite avec succès.");

    // Masquer le message après 3 secondes
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Gestion des Factures
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Période
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography>De</Typography>
            <DatePicker
              label="Date de début"
              value={dateDebut}
              onChange={(newValue) => setDateDebut(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
            <Typography>À</Typography>
            <DatePicker
              label="Date de fin"
              value={dateFin}
              onChange={(newValue) => setDateFin(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>

          <Button type="submit" variant="contained" color="primary" sx={{ mt: 4 }}>
            Re-Generer
          </Button>
          {message && (
            <Alert severity="success" sx={{ mt: 2 }}>
              {message}
            </Alert>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default GestionFactures;
