'use client';

import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import WarningIcon from '@mui/icons-material/Warning';
import {
  Box,
  Button,
  Container,
  createTheme,
  Divider,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { width } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
});

const ModifierPatient = () => {
  const [formPatient, setFormPatient] = useState({
    code: '',
  });

  const [formName, setFormName] = useState({
    nom: '',
  });

  const [showForm, setShowForm] = useState(false);

  const [demande, setDemande] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormPatient({
      ...formPatient,
      [name]: value,
    });

    setFormName({
      ...formName,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(!showForm);
    setFormName({
      ...formName,
      ['nom']: 'assia',
    });
    setDemande('1511292, 2015-11-09 : P A');
    console.log('Form Data:', formPatient);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Modification de Patient
        </Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Patient
          </Typography>
          <TextField
            label="Code"
            variant="outlined"
            name="code"
            value={formPatient.code}
            onChange={handleChange}
            fullWidth
          />
          <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
            <Button variant="contained" color="primary" type="submit" sx={{ m: 2 }}>
              <SearchIcon />
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        {showForm && (
          <>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                padding: 3,
                borderRadius: 2,
                boxShadow: 3,
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Typography variant="h6" marginTop={3}>
                Nouveau nom de Patient
              </Typography>

              <TextField
                label="Enter nom"
                variant="outlined"
                name="nom"
                value={formName.nom}
                onChange={handleChange}
                fullWidth
              />

              <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <WarningIcon color="error" />
                <Typography variant="body1" color="error">
                  En changeant le nom de ce patient, vous auriez changé le nom pour toutes ces demandes.
                </Typography>
                <Button variant="contained" type="submit">
                  Changer
                </Button>
              </Stack>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                padding: 3,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" marginTop={3}>
                Demandes affectées au patient
              </Typography>
              <Typography variant="body1" marginTop={3}>
                {demande}
              </Typography>
            </Box>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default ModifierPatient;
