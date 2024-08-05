'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
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
import { styled } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
});

const StyledFormContainer = styled(Box)({
  padding: 32,
  backgroundColor: '#ffffff',
  borderRadius: 8,
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  marginBottom: 32,
});

const StyledCard = styled(Card)({
  marginTop: 32,
  padding: 16,
  borderRadius: 8,
});

const RechercheAvanceMedecin = () => {
  const [form, setForm] = useState({
    nom: '',
    specialite: '',
    tel: '',
    email: '',
    adresse: '',
  });

  const [medecins, setMedecins] = useState([]);
  const [medecinsPourFusion, setMedecinsPourFusion] = useState([]);
  const [showList, setShowList] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', form);

    const medecinsRecuperes = [
      {
        id: 1,
        nom: 'Dr. Dupont',
        specialite: 'Cardiologie',
        tel: '0101010101',
        email: 'dupont@example.com',
        adresse: '123 Rue de Paris',
      },
      {
        id: 2,
        nom: 'Dr. Martin',
        specialite: 'Dermatologie',
        tel: '0202020202',
        email: 'martin@example.com',
        adresse: '456 Rue de Lyon',
      },
    ];
    setMedecins(medecinsRecuperes);
    setShowList(true);
    genererPropositionsFusion(medecinsRecuperes);
  };

  const genererPropositionsFusion = (medecins) => {
    let medecinsFusion = [];
    let medecinPrecedent = medecins[0];
    let medecinsPourFusionTemp = [medecinPrecedent];

    for (let i = 1; i < medecins.length; i++) {
      const medecin = medecins[i];
      if (medecin.nom.trim().toUpperCase().startsWith(medecinPrecedent.nom.trim().toUpperCase())) {
        medecinsPourFusionTemp.push(medecin);
      } else {
        if (medecinsPourFusionTemp.length > 1) {
          medecinsFusion.push([...medecinsPourFusionTemp]);
        }
        medecinsPourFusionTemp = [medecin];
      }
      medecinPrecedent = medecin;
    }

    if (medecinsPourFusionTemp.length > 1) {
      medecinsFusion.push([...medecinsPourFusionTemp]);
    }
    setMedecinsPourFusion(medecinsFusion);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const exportData = (format) => {
    console.log(`Exporting data as ${format}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <StyledFormContainer>
          <Typography variant="h4" gutterBottom>
            Recherche Avancée (Médecin)
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField name="nom" label="Nom" value={form.nom} onChange={handleChange} fullWidth />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  name="specialite"
                  label="Spécialité"
                  value={form.specialite}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField name="tel" label="Tel" value={form.tel} onChange={handleChange} fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField name="email" label="Email" value={form.email} onChange={handleChange} fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField name="adresse" label="Adresse" value={form.adresse} onChange={handleChange} fullWidth />
              </Grid>

              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Lister
                </Button>
              </Grid>
            </Grid>
          </form>
        </StyledFormContainer>

        {showList && (
          <Box sx={{ marginTop: 4 }}>
            {medecinsPourFusion.length > 0 && (
              <StyledCard>
                <Typography variant="h5" gutterBottom>
                  Proposition de fusion
                </Typography>
                {medecinsPourFusion.map((fusionGroup, index) => (
                  <form key={index} method="post" action="lire-actions-groupees.jsp">
                    <input type="hidden" name="obj" value="medecin" />
                    <input type="hidden" name="action" value="actions-groupees" />

                    <FormControl fullWidth>
                      <InputLabel id="actions-label">Actions</InputLabel>
                      <Select labelId="actions-label" name="op">
                        <MenuItem value="---">---</MenuItem>
                        <MenuItem value="Fusionner">Fusionner</MenuItem>
                      </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                      Valider
                    </Button>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell width="160">NOM</TableCell>
                          <TableCell width="110">SPECIALIT</TableCell>
                          <TableCell width="110px" align="center">
                            TELEPHONE
                          </TableCell>
                          <TableCell width="150px">EMAIL</TableCell>
                          <TableCell>ADRESSE</TableCell>
                          <TableCell width="110"> </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {fusionGroup.map((medecin, idx) => (
                          <TableRow key={medecin.id}>
                            <TableCell>
                              <input type="hidden" name="_chk" value={medecin.id} />
                              {medecin.nom}
                            </TableCell>
                            <TableCell>{medecin.specialite}</TableCell>
                            <TableCell>{medecin.tel}</TableCell>
                            <TableCell>{medecin.email}</TableCell>
                            <TableCell>{medecin.adresse}</TableCell>
                            {idx === 0 && (
                              <TableCell rowSpan={fusionGroup.length} align="center">
                                <input type="hidden" name="op" value="Fusionner" />
                                <Button type="submit" variant="contained" color="primary">
                                  Fusionner
                                </Button>
                              </TableCell>
                            )}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </form>
                ))}
              </StyledCard>
            )}

            <StyledCard>
              <form method="post" action="lire-actions-groupees.jsp">
                <input type="hidden" name="obj" value="medecin" />
                <input type="hidden" name="action" value="actions-groupees" />
                <FormControl fullWidth>
                  <InputLabel id="actions-label">Actions</InputLabel>
                  <Select labelId="actions-label" name="op">
                    <MenuItem value="---">---</MenuItem>
                    <MenuItem value="Fusionner">Fusionner</MenuItem>
                    {/* Ajouter d'autres options d'action ici */}
                  </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Valider
                </Button>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>NOM</TableCell>
                      <TableCell>SPECIALIT</TableCell>
                      <TableCell>TELEPHONE</TableCell>
                      <TableCell>EMAIL</TableCell>
                      <TableCell>ADRESSE</TableCell>
                      <TableCell align="center"> </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {medecins.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((medecin) => (
                      <TableRow key={medecin.id}>
                        <TableCell>
                          <input type="hidden" name="_chk" value={medecin.id} />
                          {medecin.nom}
                        </TableCell>
                        <TableCell>{medecin.specialite}</TableCell>
                        <TableCell>{medecin.tel}</TableCell>
                        <TableCell>{medecin.email}</TableCell>
                        <TableCell>{medecin.adresse}</TableCell>
                        <TableCell align="center">
                          <input type="checkbox" name="_chk" value={medecin.id} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </form>
              <TablePagination
                component="div"
                count={medecins.length}
                page={page}
                onPageChange={handlePageChange}
g             />
            </StyledCard>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
              <Button variant="contained" color="primary" onClick={() => exportData('PDF')}>
                Exporter en PDF
              </Button>
              <Button variant="contained" color="primary" onClick={() => exportData('CSV')}>
                Exporter en CSV
              </Button>

              <Button variant="contained" color="primary" onClick={() => exportData('PDF')}>
                Exporter en XML
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default RechercheAvanceMedecin;
