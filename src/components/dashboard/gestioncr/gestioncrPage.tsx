'use client';

import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
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

// TypeScript type for form data
interface FormData {
  codePatient: string;
  nomPatient: string;
  telPatient: string;
  refDemande: string;
  refExt: string;
  nomOrganisme: string;
  idOrganisme: number;
  nomMedecin: string;
  idMedecin: number;
  nomDocteur?: string;
  nomOrgane?: string;
  nomSecretaire?: string;
  nomlesion?: string;
}

const data = {
  crModeles: ['Modèle 1', 'Modèle 2', 'Modèle 3'], // Example data, replace with actual data
};

const organesList = [
  { id: 1, code: 'ORG1', nom: 'Cœur', description: 'Pompe le sang à travers le système circulatoire' },
  // ... other organs
];

const Gestioncr: React.FC = () => {
  const [formFields, setFormFields] = useState<FormData>({
    codePatient: '',
    nomPatient: '',
    telPatient: '',
    refDemande: '',
    refExt: '',
    nomOrganisme: '',
    idOrganisme: -1,
    nomMedecin: '',
    idMedecin: -1,
    nomDocteur: '',
    nomOrgane: '',
    nomSecretaire: '',
    nomlesion: '',
  });
  const [showForm, setShowForm] = useState(false);
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 2 }}>
      {/* Generate CR Model */}
      <Box mb={4}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Générer le modèle du CR
          </Typography>
          <Button type="submit" variant="contained" color="primary" onClick={toggleForm}>
            <SearchIcon />
          </Button>
        </Stack>

        {data.crModeles.length === 0 ? (
          <Typography color="textSecondary">
            Aucun modèle de compte rendu n'est enregistré dans votre système.
          </Typography>
        ) : (
          <form method="post" action="lister.go">
            <input type="hidden" name="obj" value="compteRendu" />
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <TextField
                  label="Réf. Demande"
                  name="reference"
                  defaultValue={formFields.refDemande}
                  size="small"
                  fullWidth
                />
                <FormControl fullWidth>
                  <InputLabel>Modèle</InputLabel>
                  <Select name="cr_model" defaultValue="" size="small">
                    {data.crModeles.map((model, index) => (
                      <MenuItem key={index} value={model}>
                        {model}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
              <Button type="submit" variant="contained" color="primary">
                Générer
              </Button>
            </Stack>
          </form>
        )}
      </Box>

      {/* Find CR */}
      {showForm && (
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            Retrouver un CR
          </Typography>
          <form method="post" action="lire-compte-rendu-recherche.jsp">
            <input type="hidden" name="obj" value="compteRendu" />
            <Stack spacing={2}>
              <TextField
                label="Code Patient"
                name="codePatient"
                value={formFields.codePatient}
                onChange={handleFormChange}
                size="small"
                fullWidth
              />
              <TextField
                label="Nom Patient"
                name="nomPatient"
                value={formFields.nomPatient}
                onChange={handleFormChange}
                size="small"
                fullWidth
              />
              <TextField
                label="Téléphone"
                name="telPatient"
                value={formFields.telPatient}
                onChange={handleFormChange}
                size="small"
                fullWidth
              />
              <TextField
                label="Réf. Demande"
                name="refDemande"
                value={formFields.refDemande}
                onChange={handleFormChange}
                size="small"
                fullWidth
              />
              <TextField
                label="Réf. Ext."
                name="refExt"
                value={formFields.refExt}
                onChange={handleFormChange}
                size="small"
                fullWidth
              />
              <FormControl fullWidth size="small">
                <InputLabel>Organisme</InputLabel>
                <Select name="nomOrganisme" value={formFields.nomOrganisme} onChange={handleFormChange}>
                  <MenuItem value="Organisme 1">Organisme 1</MenuItem>
                  <MenuItem value="Organisme 2">Organisme 2</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Médecin</InputLabel>
                <Select name="nomMedecin" value={formFields.nomMedecin} onChange={handleFormChange}>
                  <MenuItem value="Médecin 1">Médecin 1</MenuItem>
                  <MenuItem value="Médecin 2">Médecin 2</MenuItem>
                </Select>
              </FormControl>
              <Button type="submit" variant="contained" color="primary">
                Rechercher
              </Button>
            </Stack>
          </form>
        </Box>
      )}

      {/* List CRs */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Lister les CRs
        </Typography>
        <form method="post" action="lister-crs.jsp">
          <fieldset style={{ padding: '16px', borderRadius: '8px' }}>
            <legend>Lister les CRs</legend>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Ignorer la période" />
            <RadioGroup row aria-labelledby="filter-by-status" name="filter-by-status">
              <FormControlLabel value="created" control={<Radio />} label="Créés" />
              <FormControlLabel value="modified" control={<Radio />} label="Modifiés" />
              <FormControlLabel value="other" control={<Radio />} label="D.Sortie" />
            </RadioGroup>
            <RadioGroup aria-labelledby="filter-by-date" defaultValue="today" name="filter-by-date">
              <FormControlLabel value="today" control={<Radio />} label="Aujourd'hui" />
              <FormControlLabel value="yesterday" control={<Radio />} label="Hier" />
              <FormControlLabel value="custom" control={<Radio />} label="Dans une période personnalisée" />
            </RadioGroup>
            <Divider sx={{ marginY: 2 }} />
            <Stack direction="row" spacing={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Pour le docteur</InputLabel>
                <Select id="nomDocteur" name="nomDocteur" value={formFields.nomDocteur} onChange={handleFormChange}>
                  <MenuItem value="Docteur1">Docteur1</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Organe</InputLabel>
                <Select id="nomOrgane" name="nomOrgane" value={formFields.nomOrgane} onChange={handleFormChange}>
                  <MenuItem value="tousOrganes">Tous les organes</MenuItem>
                  <MenuItem value="Organe1">Organe1</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Secrétaire</InputLabel>
                <Select
                  id="nomSecretaire"
                  name="nomSecretaire"
                  value={formFields.nomSecretaire}
                  onChange={handleFormChange}
                >
                  <MenuItem value="Secretaire1">Secretaire1</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Lesion</InputLabel>
                <Select id="nomlesion" name="nomlesion" value={formFields.nomlesion} onChange={handleFormChange}>
                  <MenuItem value="Touslesions">Toutes les lésions</MenuItem>
                  <MenuItem value="lesion1">Lésion1</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Divider />
            <Stack direction="row" spacing={2}>
              <RadioGroup aria-labelledby="sent-by-email" name="sent-by-email">
                <FormControlLabel value="sent" control={<Radio />} label="Envoyés par mail" />
                <FormControlLabel value="not-sent" control={<Radio />} label="Non envoyés" />
                <FormControlLabel value="all" control={<Radio />} label="Tout" />
              </RadioGroup>
              <RadioGroup aria-labelledby="delivered" name="delivered">
                <FormControlLabel value="not-delivered" control={<Radio />} label="Non remis encore" />
                <FormControlLabel value="delivered" control={<Radio />} label="Remis" />
                <FormControlLabel value="all" control={<Radio />} label="Tout" />
              </RadioGroup>
            </Stack>
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Lister
            </Button>
          </fieldset>
        </form>
      </Box>

      {/* Display Selected Item */}
      {/* Add this section if you want to display details of a selected item */}
      {/* 
      {selectedItem && (
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Détails du CR sélectionné
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Code Patient"
              name="codePatient"
              value={selectedItem.codePatient}
              onChange={(e) => setSelectedItem({ ...selectedItem, codePatient: e.target.value })}
              fullWidth
            />
            <TextField
              label="Nom Patient"
              name="nomPatient"
              value={selectedItem.nomPatient}
              onChange={(e) => setSelectedItem({ ...selectedItem, nomPatient: e.target.value })}
              fullWidth
            />
            <TextField
              label="Téléphone"
              name="telPatient"
              value={selectedItem.telPatient}
              onChange={(e) => setSelectedItem({ ...selectedItem, telPatient: e.target.value })}
              fullWidth
            />
            <TextField
              label="Réf. Demande"
              name="refDemande"
              value={selectedItem.refDemande}
              onChange={(e) => setSelectedItem({ ...selectedItem, refDemande: e.target.value })}
              fullWidth
            />
            <TextField
              label="Réf. Ext."
              name="refExt"
              value={selectedItem.refExt}
              onChange={(e) => setSelectedItem({ ...selectedItem, refExt: e.target.value })}
              fullWidth
            />
            <TextField
              label="Organisme"
              name="nomOrganisme"
              value={selectedItem.nomOrganisme}
              onChange={(e) => setSelectedItem({ ...selectedItem, nomOrganisme: e.target.value })}
              fullWidth
            />
            <TextField
              label="Médecin"
              name="nomMedecin"
              value={selectedItem.nomMedecin}
              onChange={(e) => setSelectedItem({ ...selectedItem, nomMedecin: e.target.value })}
              fullWidth
            />
          </Stack>
          <Button variant="contained" color="secondary" onClick={() => setSelectedItem(null)}>
            Annuler
          </Button>
        </Box>
      )}
      */}
    </Box>
  );
};

export default Gestioncr;
