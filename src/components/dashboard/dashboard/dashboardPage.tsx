'use client';

import React, { useEffect, useState } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PeopleIcon from '@mui/icons-material/People';
import { Box, Container, Grid, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function TableauDeBord() {
  const [date, setDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setStatistics({
      caNet: 12000.0,
      caInterne: 2500.0,
      caExterne: 6000.0,
      caOfficiel: 3500.0,
      caisse: 16000.0,
      avances: 2500.0,
      reliquatsExternes: 1500.0,
      reliquatsInternes: 700.0,
      patients: 50,
      demandes: 60,
    });
  };

  const barData1 = {
    labels: ['CA Interne', 'CA Externe', 'CA Officiel'],
    datasets: [
      {
        label: "Chiffre d'Affaires",
        data: statistics ? [statistics.caInterne, statistics.caExterne, statistics.caOfficiel] : [],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
      },
    ],
  };

  const barData2 = {
    labels: ['Caisse', 'Avances', 'Reliquats Externes', 'Reliquats Internes'],
    datasets: [
      {
        label: 'Détail des Caisse',
        data: statistics
          ? [statistics.caisse, statistics.avances, statistics.reliquatsExternes, statistics.reliquatsInternes]
          : [],
        backgroundColor: ['#AB47BC', '#FF7043', '#29B6F6', '#8D6E63'],
      },
    ],
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#424242' }}
        >
          Tableau de Bord Quotidien - {currentDate}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <CalendarTodayIcon sx={{ fontSize: 30, color: '#1976D2' }} />
          <TextField
            label="Sélectionner une date"
            type="date"
            value={date}
            onChange={handleDateChange}
            sx={{
              ml: 2,
              backgroundColor: '#f5f5f5',
              borderRadius: 1,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#42A5F5',
                },
                '&:hover fieldset': {
                  borderColor: '#1E88E5',
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>

        {statistics && (
          <>
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <Card sx={{ display: 'flex', alignItems: 'center', boxShadow: 1 }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography color="text.secondary" variant="overline">
                      Chiffre d'Affaires
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar sx={{ backgroundColor: '#42A5F5', width: 40, height: 40 }}>
                        <AttachMoneyIcon sx={{ fontSize: 30, color: 'white' }} />
                      </Avatar>
                      <Stack>
                        <Typography variant="h6">{statistics.caNet.toFixed(2)} MAD</Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card sx={{ display: 'flex', alignItems: 'center', boxShadow: 1 }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography color="text.secondary" variant="overline">
                      Caisse
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar sx={{ backgroundColor: '#66BB6A', width: 40, height: 40 }}>
                        <LocalAtmIcon sx={{ fontSize: 30, color: 'white' }} />
                      </Avatar>
                      <Stack>
                        <Typography variant="h6">{statistics.caisse.toFixed(2)} MAD</Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card sx={{ display: 'flex', alignItems: 'center', boxShadow: 1 }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography color="text.secondary" variant="overline">
                      Patients
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar sx={{ backgroundColor: '#FFA726', width: 40, height: 40 }}>
                        <PeopleIcon sx={{ fontSize: 30, color: 'white' }} />
                      </Avatar>
                      <Stack>
                        <Typography variant="h6">{statistics.patients}</Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card sx={{ display: 'flex', alignItems: 'center', boxShadow: 1 }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography color="text.secondary" variant="overline">
                      Demandes
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar sx={{ backgroundColor: '#FF7043', width: 40, height: 40 }}>
                        <DescriptionIcon sx={{ fontSize: 30, color: 'white' }} />
                      </Avatar>
                      <Stack>
                        <Typography variant="h6">{statistics.demandes}</Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">Chiffre d'Affaires (Interne vs Externe vs Officiel)</Typography>
                      <Bar data={barData1} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ fontFamily: 'Roboto, sans-serif', color: '#424242', fontWeight: 'bold' }}
                      >
                        Détail des Caisse
                      </Typography>
                      <Bar data={barData2} />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
}
