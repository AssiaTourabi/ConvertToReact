'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';

const Reporting = () => {
  const [activePage, setActivePage] = useState(null);

  const renderForm = () => {
    return (
      <Box component="form" action="lire-rapport.jsp" method="post" sx={{ mt: 3 }}>
        <input type="hidden" name="obj" value={activePage} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="dateD" type="date" label="De" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="dateF" type="date" label="À" InputLabelProps={{ shrink: true }} />
          </Grid>
          {activePage === 'realisation-financiere' && (
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Période</FormLabel>
                <RadioGroup row name="par" defaultValue="jour">
                  <FormControlLabel value="jour" control={<Radio />} label="Jour" />
                  <FormControlLabel value="semaine" control={<Radio />} label="Semaine" />
                  <FormControlLabel value="mois" control={<Radio />} label="Mois" />
                </RadioGroup>
              </FormControl>
            </Grid>
          )}
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              Rapporter
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const renderContent = () => {
    switch (activePage) {
      case 'realisation-financiere':
        return renderForm();
      case 'analyse-des-reglements':
        return renderForm();
      case 'examens-realises':
        return renderForm();
      case 'cas-par-organisme':
        return renderForm();
      default:
        return (
          <Typography variant="body1" align="center" sx={{ mt: 4 }}>
            Sélectionnez une option pour voir le contenu.
          </Typography>
        );
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        Reporting
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Card
            variant="outlined"
            onClick={() => setActivePage('realisation-financiere')}
            sx={{ cursor: 'pointer', '&:hover': { boxShadow: 4 } }}
          >
            <CardContent>
              <Typography variant="h6" align="center">
                Réalisations financières
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            variant="outlined"
            onClick={() => setActivePage('analyse-des-reglements')}
            sx={{ cursor: 'pointer', '&:hover': { boxShadow: 4 } }}
          >
            <CardContent>
              <Typography variant="h6" align="center">
                Analyse des règlements
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            variant="outlined"
            onClick={() => setActivePage('examens-realises')}
            sx={{ cursor: 'pointer', '&:hover': { boxShadow: 4 } }}
          >
            <CardContent>
              <Typography variant="h6" align="center">
                Examens effectués
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            variant="outlined"
            onClick={() => setActivePage('cas-par-organisme')}
            sx={{ cursor: 'pointer', '&:hover': { boxShadow: 4 } }}
          >
            <CardContent>
              <Typography variant="h6" align="center">
                Cas par organisme
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }}>{renderContent()}</Box>
    </Container>
  );
};

export default Reporting;
