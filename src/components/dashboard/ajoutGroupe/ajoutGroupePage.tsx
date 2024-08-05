import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Input,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';

const AjoutGroupe = () => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        margin: 'auto',
        padding: 4,
        border: '2px solid #61afd8',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Liste des Comptes Rendus
      </Typography>
      <form encType="multipart/form-data" method="post" action="ajouter.go">
        <input type="hidden" name="obj" value="compteRenduMultipleAvance" />

        <Box sx={{ mb: 3 }}>
          <RadioGroup defaultValue="valide" aria-labelledby="radio-buttons-group-label" name="etat">
            <FormControlLabel value="brouillon" control={<Radio />} label="Brouillon" />
            <FormControlLabel value="avalider" control={<Radio />} label="À valider" />
            <FormControlLabel value="acorriger" control={<Radio />} label="À corriger" />
            <FormControlLabel value="valide" control={<Radio />} label="Validé" />
          </RadioGroup>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Button variant="contained" startIcon={<DownloadIcon />} sx={{ backgroundColor: '#61afd8' }}>
            Choisir un fichier
          </Button>
        </Box>
        <Stack direction="row" justifyContent="flex-end">
          <Button type="submit" name="action" variant="contained" color="primary" sx={{ px: 4, py: 1.5 }}>
            Enregistrer Comptes Rendus
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AjoutGroupe;
