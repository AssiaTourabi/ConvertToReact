'use client';

import { useState } from 'react';
import Head from 'next/head';
import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

const FacturationPersonnalisee = () => {
  const [reference, setReference] = useState('');
  const [dateFacturation, setDateFacturation] = useState<Date | null>(null);
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', { reference, code });
  };

  return (
    <>
      <Head>
        <title>:: Gesmed.Pro - Facturation personnalisée ::</title>
      </Head>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Facturation personnalisée
          </Typography>
          <form onSubmit={handleSubmit} id="formRecherchePatientId">
            <input type="hidden" name="obj" value="facturationPersonnalisee" />
            <input type="hidden" name="action" value="generer" />

            <Typography variant="h6">Demande</Typography>
            <TextField
              label="Entrer la référence de la demande"
              fullWidth
              margin="normal"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />

            <Stack spacing={2}>
              <Typography variant="h6">Facture</Typography>
              <TextField
                label="Entrer le code de la facture"
                fullWidth
                margin="normal"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <DatePicker
                label="Date de début"
                value={dateFacturation}
                onChange={(newValue) => setDateFacturation(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Imprimer
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default FacturationPersonnalisee;
