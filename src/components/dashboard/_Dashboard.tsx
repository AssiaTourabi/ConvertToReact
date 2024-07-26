'use client';

import React, { useState } from 'react';
import { Box, Button, Container, FormControl, Grid, Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Title as ChartTitle,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartTitle, Tooltip, Legend);

// Mock data, replace with your API or state management logic
const mockData = {
  ca: { CA: 1000, CAI: 500, CAE: 300, CAO: 200, AVOIR: 50 },
  nombrePD: { NB_DEMANDES: 150, NB_PATIENTS: 120 },
  caisse: { Cash: 400, Credit: 600 },
  caisseDetaillee: { Cash: { 1: 200, 2: 200 }, Credit: { 1: 300, 2: 300 } },
  comptesCaisse: [1, 2],
};

// Styled Components
const DashboardContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  width: '900px',
}));

const DashboardTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

const GraphPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%', // Set width to 100% to take full width of the container
}));

const DateFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: '80px',
}));

// Define props types for DateSelector
interface DateSelectorProps {
  onDateChange: (type: 'day' | 'month' | 'year', value: string) => void;
  onAffichage: () => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onDateChange, onAffichage }) => {
  return (
    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <TextField
            label="Day"
            type="number"
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: 1, max: 31 }}
            size="small"
            onChange={(e) => onDateChange('day', e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Month"
            type="number"
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: 1, max: 12 }}
            size="small"
            onChange={(e) => onDateChange('month', e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Year"
            type="number"
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: 2000, max: 2100 }}
            size="small"
            onChange={(e) => onDateChange('year', e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={onAffichage}
            size="small"
            sx={{ backgroundColor: 'black', width: '150px' }}
          >
            Afficher
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const Dashboard: React.FC = () => {
  const [date, setDate] = useState({ day: '01', month: '01', year: '2023' });

  const handleDateChange = (type: 'day' | 'month' | 'year', value: string) => {
    setDate((prevDate) => ({ ...prevDate, [type]: value }));
  };

  const handleAffichage = () => {
    console.log('Selected Date:', date);
    // Add your date handling logic here
  };

  return (
    <DashboardContainer sx={{ backgroundColor: 'red' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <GraphPaper sx={{ border: '1px solid black', backgroundColor: 'none' }}>
            <Bar
              data={{
                labels: ['Net', 'Interne', 'Externe', 'Officiel', 'Avoir'],
                datasets: [
                  {
                    label: "Chiffre d'Affaires",
                    data: [mockData.ca.CA, mockData.ca.CAI, mockData.ca.CAE, mockData.ca.CAO, mockData.ca.AVOIR],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </GraphPaper>
        </Grid>

        <Grid item xs={12} md={6}>
          <GraphPaper sx={{ border: '1px solid black' }}>
            <Bar
              data={{
                labels: Object.keys(mockData.caisse),
                datasets: [
                  {
                    label: 'Caisse',
                    data: Object.values(mockData.caisse),
                    backgroundColor: 'rgba(44, 191, 137, 0.6)',
                    borderColor: 'rgba(44, 191, 137, 0.2)',
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </GraphPaper>
        </Grid>

        <Grid item xs={12}>
          <DateSelector onDateChange={handleDateChange} onAffichage={handleAffichage} />
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default Dashboard;
