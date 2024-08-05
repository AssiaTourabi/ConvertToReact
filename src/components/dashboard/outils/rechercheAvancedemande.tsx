'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const AdvancedSearchForm = () => {
  const [form, setForm] = useState({
    dateDemandeD: '',
    dateDemandeF: '',
    dateFacture: '',
    dateSortie: '',
    patient: '',
    codeExamen: '',
    nomOrganisme: '',
    idOrganisme: '',
    nomMedecin: '',
    idMedecin: '',
    referenceExterne: '',
    creePar: '',
    codeFacture: '',
    modePaiement: '',
    referencePaiement: '',
    assure: -1,
    matricule: '',
    affilie: '',
    off: -1,
  });

  const paymentModes = [
    { value: 'espece', label: ' Espèces' },
    { value: 'cheque', label: 'chéque' },
    { value: 'carteBancaire', label: ' carte bancaire' },
    { value: 'virement', label: 'Virement' },
    { value: 'espaceDepalce', label: 'Espèces déplacées' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleDateChange = (name, date) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter la logique de soumission du formulaire ici
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Recherche Avancée
      </Typography>
      <form onSubmit={handleSubmit}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ marginBottom: 6 }}>
            Eléments de la demande
          </Typography>
          <Grid container spacing={4}>
            <Stack direction="row" spacing={3}>
              <Grid item xs={12} md={2} />
              <Grid item xs={12} md={4}>
                <DatePicker
                  label="Du"
                  views={['month']}
                  //value={form.dateSortie}
                  onChange={(date) => handleDateChange('dateSortie', date)}
                  renderInput={(params) => <TextField {...params} sx={{ width: 200 }} />}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DatePicker
                  label="Au"
                  views={['month']}
                  //value={form.dateSortie}
                  onChange={(date) => handleDateChange('dateSortie', date)}
                  renderInput={(params) => <TextField {...params} sx={{ width: 200 }} />}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DatePicker
                  label="Date de sortie"
                  views={['month']}
                  //value={form.dateSortie}
                  onChange={(date) => handleDateChange('dateSortie', date)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={12} md={2} />
            </Stack>

            <Grid item xs={12} md={6}>
              <TextField label="Patient" name="patient" value={form.patient} onChange={handleChange} fullWidth />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField label="Organisme" name="organisme" value={form.codeExamen} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Medecin"
                name="medecin"
                value={form.referenceExterne}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Prélèvement"
                name="codeExamen"
                value={form.codeExamen}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Réf. Externe"
                name="referenceExterne"
                value={form.referenceExterne}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField label="Créée par" name="creePar" value={form.creePar} onChange={handleChange} fullWidth />
            </Grid>
          </Grid>
        </Paper>
        <Box mt={3}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Eléments de la facturation
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <RadioGroup row name="off" value={form.off} onChange={handleChange}>
                    <FormControlLabel value={-1} control={<Radio />} label="Tout" />
                    <FormControlLabel value={1} control={<Radio />} label="Privé" />
                    <FormControlLabel value={0} control={<Radio />} label="Officiel" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Ref. Facture"
                  name="codeFacture"
                  value={form.codeFacture}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DatePicker
                  label="Date Facture"
                  views={['month']}
                  //value={form.dateSortie}
                  onChange={(date) => handleDateChange('dateSortie', date)}
                  renderInput={(params) => <TextField {...params} sx={{ width: 200 }} />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Mode paiement</InputLabel>
                  <Select label="mode Paiement" name="modePaiement" value={form.modePaiement} onChange={handleChange}>
                    {paymentModes.map((mode) => (
                      <MenuItem key={mode.value} value={mode.value}>
                        {mode.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Réf. paiement"
                  name="referencePaiement"
                  value={form.referencePaiement}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Box mt={3}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Eléments du patient
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <RadioGroup row name="assure" value={form.assure} onChange={handleChange}>
                    <FormControlLabel value={-1} control={<Radio />} label="Tout" />
                    <FormControlLabel value={1} control={<Radio />} label="Oui" />
                    <FormControlLabel value={0} control={<Radio />} label="Non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Matricule"
                  name="matricule"
                  value={form.matricule}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Affilié" name="affilie" value={form.affilie} onChange={handleChange} fullWidth />
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Box mt={3} textAlign="center">
          <Button variant="contained" color="primary" type="submit">
            Recherche
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AdvancedSearchForm;
