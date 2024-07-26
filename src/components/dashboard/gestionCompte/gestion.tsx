'use client';

import React, { useEffect, useState } from 'react';
import { CancelOutlined, CheckCircleOutline, Lock, LockOpen, Refresh } from '@mui/icons-material';
import { Box, Button, Container, Divider, Grid, IconButton, TextField, Typography } from '@mui/material';

interface Compte {
  idCompte: number;
  utilisateur: string;
  identifiant: string;
  motDePasse: string;
  actif: number;
  accesExterne: number;
}

const GestionCompte: React.FC = () => {
  const [comptes, setComptes] = useState<Compte[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data: Compte[] = [
        {
          idCompte: 1,
          utilisateur: 'AF59063D54 49D744D3BC',
          identifiant: 'AssiaTou',
          motDePasse: 'assia',
          actif: 1,
          accesExterne: 1,
        },
        {
          idCompte: 2,
          utilisateur: 'ED0BA9FC6C B43C130CC1',
          identifiant: 'AssiaAssia',
          motDePasse: 'assia',
          actif: 0,
          accesExterne: 0,
        },
        {
          idCompte: 3,
          utilisateur: 'ED0B5556 66766738N83',
          identifiant: 'Hajar',
          motDePasse: 'hajar',
          actif: 1,
          accesExterne: 1,
        },
      ];
      setComptes(data);
    };

    fetchData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredComptes = comptes.filter(
    (compte) =>
      compte.utilisateur.toLowerCase().includes(searchTerm.toLowerCase()) ||
      compte.identifiant.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleActivation = (idCompte: number) => {
    setComptes((prevComptes) =>
      prevComptes.map((compte) => (compte.idCompte === idCompte ? { ...compte, actif: compte.actif ? 0 : 1 } : compte))
    );
  };

  const toggleAccess = (idCompte: number) => {
    setComptes((prevComptes) =>
      prevComptes.map((compte) =>
        compte.idCompte === idCompte ? { ...compte, accesExterne: compte.accesExterne ? 0 : 1 } : compte
      )
    );
  };

  const handlePasswordReset = (idCompte: number) => {
    console.log(`Password reset for account ID: ${idCompte}`);
    // Implement the logic for password reset here
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Gestion des Comptes
      </Typography>
      <TextField
        label="Rechercher"
        variant="outlined"
        placeholder="Rechercher par identifiant"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ marginBottom: 4 }}
      />
      <Box>
        {filteredComptes.map((compte) => (
          <Box key={compte.idCompte} mb={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {compte.utilisateur}
            </Typography>
            <Typography>Identifiant: {compte.identifiant}</Typography>
            <Typography>
              Mot de Passe:
              <Button
                variant="outlined"
                color="primary"
                startIcon={<Refresh />}
                onClick={() => handlePasswordReset(compte.idCompte)}
                sx={{ marginLeft: 1 }}
              >
                Initialiser
              </Button>
            </Typography>
            <Typography>
              État: {compte.actif ? 'Activé' : 'Désactivé'}{' '}
              <IconButton onClick={() => toggleActivation(compte.idCompte)} color="primary">
                {compte.actif ? <CancelOutlined /> : <CheckCircleOutline />}
              </IconButton>
            </Typography>
            <Typography>
              Accès Externe: {compte.accesExterne ? 'Autorisé' : 'Non autorisé'}{' '}
              <IconButton onClick={() => toggleAccess(compte.idCompte)} color="primary">
                {compte.accesExterne ? <Lock /> : <LockOpen />}
              </IconButton>
            </Typography>
            <Divider sx={{ marginY: 2 }} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default GestionCompte;
