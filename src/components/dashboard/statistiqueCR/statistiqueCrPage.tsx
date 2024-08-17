'use client';

// pages/statistiques.js
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const lesionsRoot = [
  { id: 1, nom: 'Lésion 1', children: [{ id: 2, nom: 'Sub-Lésion 1' }] },
  { id: 3, nom: 'Lésion 2' },
];
const organes = [
  { id: 1, nom: 'Organe 1' },
  { id: 2, nom: 'Organe 2' },
];

export default function StatistiquesCR() {
  const [dateDebut, setDateDebut] = useState(null);
  const [dateFin, setDateFin] = useState(null);
  const [selectedOrgane, setSelectedOrgane] = useState(0);
  const [selectedLesion, setSelectedLesion] = useState(0);
  const [stats, setStats] = useState(null);

  const handleOrganeChange = (event) => {
    setSelectedOrgane(event.target.value);
  };

  const handleLesionChange = (event) => {
    setSelectedLesion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate fetching statistics based on the selected filters
    const fetchedStats = {
      totalComptesRendus: 120,
      totalLésions: selectedLesion === 0 ? 45 : 15, // Example logic for demo purposes
      totalOrganes: selectedOrgane === 0 ? 30 : 10,
    };

    setStats(fetchedStats);
  };

  const chartData = [
    { name: 'Comptes Rendus', value: stats ? stats.totalComptesRendus : 0 },
    { name: 'Lésions', value: stats ? stats.totalLésions : 0 },
    { name: 'Organes', value: stats ? stats.totalOrganes : 0 },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Statistiques des Comptes Rendus
      </Typography>
      <Paper style={{ padding: 20 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Organe</InputLabel>
                <Select value={selectedOrgane} onChange={handleOrganeChange} label="Organe">
                  <MenuItem value={0}>- - - Tous les organes - - -</MenuItem>
                  {organes.map((organe) => (
                    <MenuItem key={organe.id} value={organe.id}>
                      {organe.nom}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Lésion</InputLabel>
                <Select value={selectedLesion} onChange={handleLesionChange} label="Lésion">
                  <MenuItem value={0}>- - - Toutes les lésions - - -</MenuItem>
                  {lesionsRoot.map((lesion) => (
                    <MenuItem key={lesion.id} value={lesion.id}>
                      {lesion.nom}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider>
                <DatePicker
                  label="De"
                  value={dateDebut}
                  onChange={(newValue) => setDateDebut(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider>
                <DatePicker
                  label="A"
                  value={dateFin}
                  onChange={(newValue) => setDateFin(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Lister les statistiques
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Display the statistics using cards and a chart if available */}
      {stats && (
        <Box mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total des Comptes Rendus</Typography>
                  <Typography variant="h4">{stats.totalComptesRendus}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total des Lésions</Typography>
                  <Typography variant="h4">{stats.totalLésions}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total des Organes</Typography>
                  <Typography variant="h4">{stats.totalOrganes}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box mt={4} style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      )}
    </Container>
  );
}
