'use client';

import React, { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';

const Comptabilite = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [etat, setEtat] = useState('');
  const [etatGlob, setEtatGlob] = useState('');
  const [selectedSubItem, setSelectedSubItem] = useState('');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
  };

  const handleSubMenuClick = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubItemClick = (subItem) => {
    setSelectedSubItem(subItem);
    setEtatGlob(subItem);
    setSubMenuAnchorEl(null);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ padding: '20px', borderRadius: '8px', boxShadow: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#333333' }}>
        Comptabilité
      </Typography>
      <Divider sx={{ marginY: '20px' }} />
      <Box sx={{ marginBottom: '20px' }}>
        <Stack sx={{ marginBottom: 2 }}>
          <Typography variant="h5" gutterBottom>
            Période
          </Typography>
        </Stack>
        <RadioGroup row aria-labelledby="filter-by-status" name="filter-by-status">
          <FormControlLabel value="aujourdhui" control={<Radio />} label="Aujourd'hui" />
          <FormControlLabel value="hier" control={<Radio />} label="Hier" />
          <FormControlLabel value="enCours" control={<Radio />} label="Le mois en cours" />
          <FormControlLabel value="dernier" control={<Radio />} label="Le mois dernier" />
          <FormControlLabel value="personnalise" control={<Radio />} label="Période personnalisée" />
        </RadioGroup>
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Etats par Organisme / Médecin
        </Typography>
        <FormControl fullWidth size="small">
          <Select id="nomSecretaire" name="nomSecretaire" value={etat} onChange={(e) => setEtat(e.target.value)}>
            <MenuItem value="Journal des restes">Journal des restes</MenuItem>
            <MenuItem value="Relevé simple">Relevé simple</MenuItem>
            <MenuItem value="Relevé détaillé">Relevé détaillé</MenuItem>
            <MenuItem value="Relevé (Affiliés)">Relevé (Affiliés)</MenuItem>
            <MenuItem value="Factures">Factures</MenuItem>
            <MenuItem value="Fac. Globale simple">Fac. Globale simple</MenuItem>
            <MenuItem value="Fac. Globale détaillée">Fac. Globale détaillée</MenuItem>
            <MenuItem value="Fac. Globale (Affiliés)">Fac. Globale (Affiliés)</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Etats globaux
        </Typography>
        <FormControl fullWidth size="small">
          <Button
            aria-controls="etatGlobaux-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            fullWidth
            size="small"
            variant="outlined"
            sx={{ justifyContent: 'space-between' }}
          >
            {selectedSubItem || etatGlob || 'Sélectionner un état global'}
            <ArrowRightIcon fontSize="small" />
          </Button>
          <Menu
            id="etatGlobaux-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            keepMounted
          >
            <MenuItem onClick={() => handleSubItemClick('Recette')}>Recette</MenuItem>
            <MenuItem onClick={() => handleSubItemClick('Restes')}>Restes (Internes Externes)</MenuItem>
            <MenuItem onClick={() => handleSubItemClick('Factures')}>Factures</MenuItem>
            <MenuItem onClick={() => handleSubItemClick('Avoirs')}>Avoirs</MenuItem>
            <MenuItem onClick={handleSubMenuClick}>
              <Box display="flex" alignItems="center">
                Déclaration simple <ArrowRightIcon fontSize="small" sx={{ marginLeft: 'auto' }} />
              </Box>
            </MenuItem>
            <MenuItem onClick={() => handleSubItemClick('Déclaration détaillée')}>Déclaration détaillée</MenuItem>
            <MenuItem onClick={() => handleSubItemClick('Déclaration Période')}>Déclaration Période</MenuItem>
            <MenuItem onClick={() => handleSubItemClick('Journal de Ventes')}>Journal de Ventes</MenuItem>
            <MenuItem onClick={() => handleSubItemClick('Journal de Règlements')}>Journal de Règlements</MenuItem>
            <MenuItem onClick={() => handleSubItemClick('Journal des Avoirs')}>Journal des Avoirs</MenuItem>
          </Menu>
          <Menu
            id="submenu"
            anchorEl={subMenuAnchorEl}
            open={Boolean(subMenuAnchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
          >
            <MenuItem onClick={() => handleSubItemClick('Fac. du jour')}>Fac. du jour</MenuItem>
            <MenuItem onClick={() => handleSubItemClick('Fac. Ant.')}>Fac. Ant.</MenuItem>
            <MenuItem onClick={() => handleSubItemClick('Avoirs')}>Avoirs</MenuItem>
          </Menu>
        </FormControl>
      </Box>
      <Divider sx={{ marginY: '20px' }}></Divider>
      <Box sx={{ marginBottom: '20px' }}>
        <Stack sx={{ marginBottom: 2 }}>
          <Typography variant="h5" gutterBottom>
            Détails
          </Typography>
        </Stack>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography variant="subtitle1">Status</Typography>
            <RadioGroup row aria-labelledby="filter-by-status" name="filter-by-status">
              <FormControlLabel value="paye" control={<Radio />} label="Payé" />
              <FormControlLabel value="impaye" control={<Radio />} label="Impayé" />
              <FormControlLabel value="tout" control={<Radio />} label="Tout" />
            </RadioGroup>
          </Box>
          <Box>
            <Typography variant="subtitle1">Type</Typography>
            <RadioGroup row aria-labelledby="filter-by-type" name="filter-by-type">
              <FormControlLabel value="facture" control={<Radio />} label="Facture" />
              <FormControlLabel value="devis" control={<Radio />} label="Devis" />
              <FormControlLabel value="tout" control={<Radio />} label="Tout" />
            </RadioGroup>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          A la date du
        </Typography>
        <DemoItem>
          <DatePicker
            //value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth size="small" />}
          />
        </DemoItem>
      </Box>
      <Button variant="contained" color="primary" sx={{ marginTop: '20px', width: '100%' }}>
        Générer
      </Button>
    </Box>
  );
};

export default Comptabilite;
