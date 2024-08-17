'use client';

import React, { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

export default function ActivitiesPage() {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [date, setDate] = useState('');
  const [showStatistic, setShowStatistic] = useState(false);

  // Valeurs arbitraires pour les statistiques
  const statistics = {
    total: '12345,67',
    externalRequests: [
      { demande: 'Demande A', patient: 'Patient 1', total: '1000,00', paye: '500,00', reste: '500,00' },
      { demande: 'Demande B', patient: 'Patient 2', total: '2000,00', paye: '1500,00', reste: '500,00' },
    ],
    externalBalances: [
      {
        date: '2024-08-21',
        demande: 'Demande A',
        patient: 'Patient 1',
        total: '1000,00',
        paiement: '500,00',
        reste: '500,00',
      },
      {
        date: '2024-08-21',
        demande: 'Demande B',
        patient: 'Patient 2',
        total: '2000,00',
        paiement: '1500,00',
        reste: '500,00',
      },
    ],
    internalRequests: [
      { demande: 'Demande C', patient: 'Patient 3', total: '3000,00', paye: '2500,00', reste: '500,00' },
    ],
    internalBalances: [
      {
        date: '2024-08-21',
        demande: 'Demande C',
        patient: 'Patient 3',
        total: '3000,00',
        paiement: '2500,00',
        reste: '500,00',
      },
    ],
  };

  const pieData = [
    {
      name: 'Demandes Externes',
      value: statistics.externalRequests.reduce((acc, req) => acc + parseFloat(req.total.replace(',', '.')), 0),
    },
    {
      name: 'Demandes Internes',
      value: statistics.internalRequests.reduce((acc, req) => acc + parseFloat(req.total.replace(',', '.')), 0),
    },
    {
      name: 'Détail des Reliquats Externes',
      value: statistics.externalBalances.reduce((acc, bal) => acc + parseFloat(bal.reste.replace(',', '.')), 0),
    },
    {
      name: 'Détail des Reliquats Internes',
      value: statistics.internalBalances.reduce((acc, bal) => acc + parseFloat(bal.reste.replace(',', '.')), 0),
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Activités du jour <span style={{ color: 'blue' }}>{date}</span>
      </Typography>
      <Card elevation={3} sx={{ p: 3, mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Sélectionner Date et Compte
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowStatistic(!showStatistic);
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label=""
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  value={selectedAccount}
                  onChange={(e) => setSelectedAccount(e.target.value)}
                  displayEmpty
                  fullWidth
                  variant="outlined"
                  renderValue={(selected) => (selected ? selected : <em>Sélectionner un compte</em>)}
                >
                  <MenuItem value="" disabled>
                    Sélectionner un compte
                  </MenuItem>
                  <MenuItem value="-1">Tous les comptes</MenuItem>
                  {/* Valeurs fictives pour les comptes */}
                  <MenuItem value="1">Compte 1</MenuItem>
                  <MenuItem value="2">Compte 2</MenuItem>
                </Select>
              </Grid>
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
        <Box mt={4}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Indicateurs de gestion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h6" gutterBottom>
                  Vue d'ensemble
                </Typography>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h4" color="text.primary">
                    {statistics.total} MAD
                  </Typography>
                </Card>
              </Box>

              <Box sx={{ mb: 9 }}>
                <Typography variant="h6" gutterBottom>
                  Répartition des montants
                </Typography>
                <PieChart width={400} height={400}>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  Détails des demandes et soldes
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ p: 2, mb: 2 }}>
                      <Typography variant="h6">Demandes externes</Typography>
                      {statistics.externalRequests.length === 0 ? (
                        <Typography>Aucune demande externe.</Typography>
                      ) : (
                        statistics.externalRequests.map((request, index) => (
                          <Card key={index} sx={{ mb: 1, p: 1 }}>
                            <Typography>
                              <strong>Demande:</strong> {request.demande}
                            </Typography>
                            <Typography>
                              <strong>Patient:</strong> {request.patient}
                            </Typography>
                            <Typography>
                              <strong>Total:</strong> {request.total}
                            </Typography>
                            <Typography>
                              <strong>Paye:</strong> {request.paye}
                            </Typography>
                            <Typography>
                              <strong>Reste:</strong> {request.reste}
                            </Typography>
                          </Card>
                        ))
                      )}
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ p: 2, mb: 2 }}>
                      <Typography variant="h6">Détail des reliquats externes</Typography>
                      {statistics.externalBalances.length === 0 ? (
                        <Typography>Aucun solde externe.</Typography>
                      ) : (
                        statistics.externalBalances.map((balance, index) => (
                          <Card key={index} sx={{ mb: 1, p: 1 }}>
                            <Typography>
                              <strong>Date:</strong> {balance.date}
                            </Typography>
                            <Typography>
                              <strong>Demande:</strong> {balance.demande}
                            </Typography>
                            <Typography>
                              <strong>Patient:</strong> {balance.patient}
                            </Typography>
                            <Typography>
                              <strong>Total:</strong> {balance.total}
                            </Typography>
                            <Typography>
                              <strong>Paiement:</strong> {balance.paiement}
                            </Typography>
                            <Typography>
                              <strong>Reste:</strong> {balance.reste}
                            </Typography>
                          </Card>
                        ))
                      )}
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ p: 2, mb: 2 }}>
                      <Typography variant="h6">Demandes internes</Typography>
                      {statistics.internalRequests.length === 0 ? (
                        <Typography>Aucune demande interne.</Typography>
                      ) : (
                        statistics.internalRequests.map((request, index) => (
                          <Card key={index} sx={{ mb: 1, p: 1 }}>
                            <Typography>
                              <strong>Demande:</strong> {request.demande}
                            </Typography>
                            <Typography>
                              <strong>Patient:</strong> {request.patient}
                            </Typography>
                            <Typography>
                              <strong>Total:</strong> {request.total}
                            </Typography>
                            <Typography>
                              <strong>Paye:</strong> {request.paye}
                            </Typography>
                            <Typography>
                              <strong>Reste:</strong> {request.reste}
                            </Typography>
                          </Card>
                        ))
                      )}
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ p: 2, mb: 2 }}>
                      <Typography variant="h6">Détail des reliquats internes</Typography>
                      {statistics.internalBalances.length === 0 ? (
                        <Typography>Aucun solde interne.</Typography>
                      ) : (
                        statistics.internalBalances.map((balance, index) => (
                          <Card key={index} sx={{ mb: 1, p: 1 }}>
                            <Typography>
                              <strong>Date:</strong> {balance.date}
                            </Typography>
                            <Typography>
                              <strong>Demande:</strong> {balance.demande}
                            </Typography>
                            <Typography>
                              <strong>Patient:</strong> {balance.patient}
                            </Typography>
                            <Typography>
                              <strong>Total:</strong> {balance.total}
                            </Typography>
                            <Typography>
                              <strong>Paiement:</strong> {balance.paiement}
                            </Typography>
                            <Typography>
                              <strong>Reste:</strong> {balance.reste}
                            </Typography>
                          </Card>
                        ))
                      )}
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      )}
    </Container>
  );
}
