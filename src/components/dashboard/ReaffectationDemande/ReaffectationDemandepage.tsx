import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

const PatientReassignment = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Réaffectation de Patients
        </Typography>
        <Grid container spacing={3}>
          {/* Search Demande */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6">Demande</Typography>
              <Divider sx={{ my: 2 }} />
              <Box component="form" method="post" action="lister.go">
                <input type="hidden" name="obj" value="demandePourChangerPatient" />
                <input type="hidden" name="action" value="chercherDemande" />
                <TextField
                  fullWidth
                  label="Référence"
                  name="reference"
                  defaultValue=""
                  sx={{ mb: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton type="submit">
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {/* Display request details if available */}
                {/* Replace with dynamic content */}
                {/* <Box>Details of Demande...</Box> */}
              </Box>
            </Paper>
          </Grid>

          {/* Old Patient */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6">Ancien Patient</Typography>
              <Divider sx={{ my: 2 }} />
              {/* Display patient details if available */}
              {/* Replace with dynamic content */}
              {/* <Box>Details of Old Patient...</Box> */}
            </Paper>
          </Grid>

          {/* New Patient */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6">Nouveau Patient</Typography>
              <Divider sx={{ my: 2 }} />
              <Box component="form" method="post" action="lister.go">
                <input type="hidden" name="obj" value="demandePourChangerPatient" />
                <input type="hidden" name="action" value="chercherPatient" />
                <TextField
                  fullWidth
                  label="Code"
                  name="code"
                  defaultValue=""
                  sx={{ mb: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton type="submit">
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {/* Display new patient details if available */}
                {/* Replace with dynamic content */}
                {/* <Box>Details of New Patient...</Box> */}
                {/* Submit form if both patients and request are available */}
                {/* <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                  Réaffecter la demande à ce patient
                </Button> */}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PatientReassignment;
