'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Stack,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Select,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Composants pour les tableaux
const Tableaux = {
  sansExamen: (
    <TableContainer component={Paper} sx={{ mt: 2,  backgroundColor: 'transparent'  }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Liste des demandes sans examen
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>REF</TableCell>
            <TableCell>DATE</TableCell>
            <TableCell>PATIENT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3}>Aucune demandes sans examens.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
  dateReglementAvantDateDemande: (
    <TableContainer component={Paper} sx={{ mt: 2, backgroundColor: 'transparent'  }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Liste des demandes dont la date règlement est avant la date demande
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>REF</TableCell>
            <TableCell>DATE</TableCell>
            <TableCell>PATIENT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3}>Aucune demandes.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
  facturesManquantes: (
    <TableContainer component={Paper} sx={{ mt: 2 , backgroundColor: 'transparent'}}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Liste factures manquantes
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>REF</TableCell>
            <TableCell>DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2}>Aucune facture manquante.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
  resteNegatif: (
    <TableContainer component={Paper} sx={{ mt: 2 , backgroundColor: 'transparent'}}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Liste des demandes avec reste à payer négatif
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>REF</TableCell>
            <TableCell>DATE</TableCell>
            <TableCell>PATIENT</TableCell>
            <TableCell>TOTAL A PAYER</TableCell>
            <TableCell>TOTAL PAYE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={5}>Aucune demandes.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
  dateDemandeDateSortie: (
    <TableContainer component={Paper} sx={{ mt: 2 , backgroundColor: 'transparent'}}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Liste des demandes avec date de demande > date sortie
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>REF</TableCell>
            <TableCell>DATE DEMANDE</TableCell>
            <TableCell>DATE SORTIE</TableCell>
            <TableCell>PATIENT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={4}>Aucune demandes.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
};

export default function TableauPage() {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [showStatistic, setShowStatistic] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Card elevation={3} sx={{ p: 3, mb: 4 }}>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowStatistic(true);
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Select
                  value={selectedAccount}
                  onChange={(e) => {
                    setSelectedAccount(e.target.value);
                    if (e.target.value === '5') {
                      setShowStatistic(false); // Hide statistics if custom period selected
                    }
                  }}
                  displayEmpty
                  fullWidth
                  variant="outlined"
                  renderValue={(selected) =>
                    selected ? selected : <em>Sélectionner une Période</em>
                  }
                >
                  <MenuItem value="" disabled>
                    Période
                  </MenuItem>
                  <MenuItem value="1">Aujourd'hui</MenuItem>
                  <MenuItem value="2">Hier</MenuItem>
                  <MenuItem value="3">Le mois en cours</MenuItem>
                  <MenuItem value="4">Le mois dernier</MenuItem>
                  <MenuItem value="5">Période Personnalisée</MenuItem>
                </Select>
              </Grid>
              {selectedAccount === '5' && (
                <>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="De"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="À"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Afficher les statistiques
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      {showStatistic && (
        <>
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: 1,
                  height: '100%',
                }}
                onClick={() => setSelectedTable('sansExamen')}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography color="text.secondary" variant="overline">
                    Liste des demandes sans examen
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Stack>
                      <Typography variant="h6">0</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: 1,
                  height: '100%',
                }}
                onClick={() => setSelectedTable('dateReglementAvantDateDemande')}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography color="text.secondary" variant="overline">
                    Liste des demandes dont la date règlement est avant la date demande
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Stack>
                      <Typography variant="h6">0</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: 1,
                  height: '100%',
                }}
                onClick={() => setSelectedTable('facturesManquantes')}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography color="text.secondary" variant="overline">
                    Liste des factures manquantes
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Stack>
                      <Typography variant="h6">0</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={2}>
              
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: 1,
                  height: '100%',
                }}
                onClick={() => setSelectedTable('resteNegatif')}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography color="text.secondary" variant="overline">
                    Liste des demandes avec reste à payer négatif
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Stack>
                      <Typography variant="h6">0</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: 1,
                  height: '100%',
                }}
                onClick={() => setSelectedTable('dateDemandeDateSortie')}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography color="text.secondary" variant="overline">
                    Liste des demandes avec date de demande > date sortie
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Stack>
                      <Typography variant="h6">0</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={2}>
              
              </Grid>
          </Grid>
          <Box>
            {selectedTable && Tableaux[selectedTable]}
          </Box>
        </>
      )}
    </Container>
  );
}
