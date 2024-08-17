'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';

const states = [
  { value: 'Actif', label: 'Actif' },
  { value: 'Inactif', label: 'Inactif' },
] as const;
const profile = [
  { value: 'GESTIONNAIRE_DEMANDE', label: 'GESTIONNAIRE_DEMANDE' },
  { value: 'GESTIONNAIRE_CR', label: 'GESTIONNAIRE_CR' },
  { value: 'GESTIONNAIRE_VALIDATION', label: 'GESTIONNAIRE_VALIDATION' },
  { value: 'MANAGER', label: 'MANAGER' },
  { value: 'DOCTEUR', label: 'DOCTEUR' },
  { value: 'ADMINISTRATEUR', label: 'ADMINISTRATEUR' },
  { value: 'ORGANISME', label: 'ORGANISME' },
  { value: 'MEDECIN', label: 'MEDECIN' },
] as const;

export function AccountDetailsForm(): React.JSX.Element {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="les informations peuvent etre modifier" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Prénom</InputLabel>
                <OutlinedInput defaultValue="Assia" label="First name" name="firstName" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Nom</InputLabel>
                <OutlinedInput defaultValue="Tourabi" label="Last name" name="lastName" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>addresse Email </InputLabel>
                <OutlinedInput defaultValue="assiatourabi55@gmail.com" label="Email address" name="email" />
              </FormControl>
            </Grid>

            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Etat</InputLabel>
                <Select defaultValue="Actif" label="State" name="state" variant="outlined">
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Profile</InputLabel>
                <Select defaultValue="GESTIONNAIRE_DEMANDES" label="profile" name="profile" variant="outlined">
                  {profile.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained" sx={{ backgroundColor: 'black' }}>
            sauvegarder détails
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
