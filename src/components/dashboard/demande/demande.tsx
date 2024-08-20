'use client';

import React, { useState } from 'react';
import { PictureAsPdf as PdfIcon, Save as SaveIcon } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import '@fontsource/poppins'; // Import Poppins font for a modern look

import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home'; // Importing icons for tabs

import ReceiptIcon from '@mui/icons-material/Receipt';
import SummarizeIcon from '@mui/icons-material/Summarize';

interface DemandeDetailProps {
  refDemande: string;
  dateD: string;
  refDemandeExterne: string;
  dateS: string;
  idOrganisme: string;
  payeurDemande: string;
  matriculeAffilie: string;
  lienParente: string;
  numPriseEnCharge: string;
  complement: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1),
  '& .MuiInputLabel-root': {
    color: theme.palette.text.primary,
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));
const DemandePat: React.FC = () => {
  const [patient, setPatient] = useState({
    idPatient: '',
    codePatient: '',
    nomPatient: '',
    cinPatient: '',
    jourPatient: '',
    moisPatient: '',
    anneePatient: '',
    agePatient: '',
    sexePatient: '',
    telPatient: '',
    adressePatient: '',
    faxPatient: '',
    infosPatient: '',
    assurePatient: '',
    antecsPatient: '',
  });

  const handleInputChange = (field: keyof typeof patient, value: string) => {
    setPatient((prev) => ({ ...prev, [field]: value }));
  };

  const handleDateChange = (value: string) => {
    const [year, month, day] = value.split('-');
    setPatient((prev) => ({
      ...prev,
      jourPatient: day,
      moisPatient: month,
      anneePatient: year,
    }));
  };

  const handleNewRequest = () => {
    console.log('Nouvelle demande ajoutée');
  };

  return (
    <StyledPaper sx={{ bgcolor: 'transparent' }}>
      <Typography variant="h6" gutterBottom>
        Informations Patient
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Code"
            variant="outlined"
            fullWidth
            value={patient.codePatient}
            onChange={(e) => handleInputChange('codePatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Nom"
            variant="outlined"
            fullWidth
            value={patient.nomPatient}
            onChange={(e) => handleInputChange('nomPatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="CIN"
            variant="outlined"
            fullWidth
            value={patient.cinPatient}
            onChange={(e) => handleInputChange('cinPatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Date de naissance"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            fullWidth
            value={`${patient.anneePatient}-${patient.moisPatient}-${patient.jourPatient}`}
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Age"
            variant="outlined"
            fullWidth
            value={patient.agePatient}
            onChange={(e) => handleInputChange('agePatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Sexe</FormLabel>
            <RadioGroup value={patient.sexePatient} onChange={(e) => handleInputChange('sexePatient', e.target.value)}>
              <FormControlLabel value="M" control={<Radio />} label="M" />
              <FormControlLabel value="F" control={<Radio />} label="F" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Tél"
            variant="outlined"
            fullWidth
            value={patient.telPatient}
            onChange={(e) => handleInputChange('telPatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Adresse"
            variant="outlined"
            fullWidth
            value={patient.adressePatient}
            onChange={(e) => handleInputChange('adressePatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Fax"
            variant="outlined"
            fullWidth
            value={patient.faxPatient}
            onChange={(e) => handleInputChange('faxPatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Infos"
            variant="outlined"
            fullWidth
            value={patient.infosPatient}
            onChange={(e) => handleInputChange('infosPatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Assuré</InputLabel>
            <Select value={patient.assurePatient} onChange={(e) => handleInputChange('assurePatient', e.target.value)}>
              <MenuItem value="0">Non</MenuItem>
              <MenuItem value="2">CNOPS</MenuItem>
              <MenuItem value="3">CNSS</MenuItem>
              <MenuItem value="4">FAR</MenuItem>
              <MenuItem value="1">Autres</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            label="Antécédants"
            variant="outlined"
            fullWidth
            value={patient.antecsPatient}
            onChange={(e) => handleInputChange('antecsPatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <StyledButton variant="contained" color="primary" onClick={handleNewRequest}>
            <AddIcon /> Ajouter un Patient
          </StyledButton>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

const DemandeEx: React.FC = () => {
  const [examens, setExamens] = useState<{ code: string; detail: string }[]>([]);
  const [newExamen, setNewExamen] = useState<{ code: string; detail: string; delai: string; prix: string }>({
    code: '',
    detail: '',
    delai: '',
    prix: '',
  });
  const [showForm, setShowForm] = useState(false);

  const handleExamenChange = (field: keyof typeof newExamen, value: string) => {
    setNewExamen((prev) => ({ ...prev, [field]: value }));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const addExamen = () => {
    setExamens((prev) => [...prev, newExamen]);
    setNewExamen({ code: '', detail: '' });
    toggleForm;
  };

  return (
    <StyledPaper sx={{ bgcolor: 'transparent' }}>
      <Typography variant="h6" gutterBottom>
        Ajout d'Examen
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Code"
            variant="outlined"
            fullWidth
            value={newExamen.code}
            onChange={(e) => handleExamenChange('code', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Détail"
            variant="outlined"
            fullWidth
            value={newExamen.detail}
            onChange={(e) => handleExamenChange('detail', e.target.value)}
          />
        </Grid>

        <Grid item xs={12} textAlign="center">
          <StyledButton variant="contained" color="primary" onClick={toggleForm}>
            <AddIcon /> Ajouter un Examen
          </StyledButton>
        </Grid>
      </Grid>
      {showForm && (
        <Box marginTop={3}>
          <Typography variant="subtitle1" gutterBottom>
            Liste des examens
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <TableSortLabel>Code</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>Détail</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>Délai</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>Prix</TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {examens.map((examen, index) => (
                  <TableRow key={index}>
                    <TableCell>{examen.code}</TableCell>
                    <TableCell>{examen.detail}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </StyledPaper>
  );
};

const DemandeDetail: React.FC<DemandeDetailProps> = ({
  refDemande,
  dateD,
  refDemandeExterne,
  dateS,
  idOrganisme,
  payeurDemande,
  matriculeAffilie,
  lienParente,
  numPriseEnCharge,
  complement,
}) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSave = () => {
    console.log('Formulaire soumis avec les détails:', {
      refDemande,
      dateD,
      refDemandeExterne,
      dateS,
      idOrganisme,
      payeurDemande,
      matriculeAffilie,
      lienParente,
      numPriseEnCharge,
      complement,
    });
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div>
      <Card variant="outlined" sx={{ maxWidth: 'md', mx: 'auto', bgcolor: 'transparent' }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" gutterBottom>
              Détails de la Demande
            </Typography>
            <IconButton onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />

          {showSearch && <RechercheDemandes />}

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Réf. Demande" value={refDemande} fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Réf. E. (Externe)" value={refDemandeExterne} fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="D.D (Date D)" value={dateD} fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="D.S (Date S)" value={dateS} fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Org. (Organisme)" value={idOrganisme} fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel control={<Checkbox checked={payeurDemande} />} label="Payeur Demande" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="M.T." value={matriculeAffilie} fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Matricule" value={matriculeAffilie} fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Affiliation" value={matriculeAffilie} fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Lien" value={lienParente} fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="PEC" value={numPriseEnCharge} fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Complément" value={complement} fullWidth multiline rows={3} variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <RadioGroup row aria-labelledby="filter-by-status" name="filter-by-status">
                  <FormControlLabel value="norm" control={<Radio />} label="Norm" />
                  <FormControlLabel value="urg" control={<Radio />} label="Urg" />
                  <FormControlLabel value="tuurg" control={<Radio />} label="T.Urg" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Box mt={2}>
                <Button variant="contained" color="primary" onClick={handleSave}>
                  Enregistrer
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

interface Reglement {
  id: number;
  dateReg: string;
  effectuePar: number;
  montant: string;
  modePaiement: string;
  reference: string;
  dateSaisie: string;
}

interface ModePaiement {
  libelle: string;
  libelleReduit: string;
}

const DocumentZone: React.FC = () => {
  const [aPayer, setAPayer] = useState<string>('0');
  const [reglements, setReglements] = useState<Reglement[]>([]);
  const [modesPaiement, setModesPaiement] = useState<ModePaiement[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAPayer(event.target.value);
  };

  const handleGenerateAvoir = () => {
    // Fonctionnalité pour générer un avoir
  };

  const handleDownloadPDF = () => {
    console.log('Télécharger le PDF');
    // Implement PDF generation logic here
  };

  return (
    <Paper sx={{ padding: 2, backgroundColor: 'transparent', height: 500 }}>
      <legend>
        <span id="typeDocument">Devis</span>
      </legend>
      <input type="hidden" id="idFacture" name="idFacture" value="1" />
      <input type="hidden" id="idDateFacture" name="dateFacture" value="2023-08-16" />
      {/* ... Autres champs cachés ... */}

      <Table>
        <TableBody>
          <TableRow>
            <TableCell colSpan={5}>
              <label>Payeur :</label>
              <span id="payeurFacture">Assia </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="10%">
              <label htmlFor="majtotal">Total</label>
            </TableCell>
            <TableCell width="20%" align="right">
              1000
            </TableCell>
            <TableCell width="5%" />
            <TableCell width="15%">
              <label htmlFor="majapayer">A pay.</label>
            </TableCell>
            <TableCell width="20%" align="right">
              <TextField
                size="small"
                style={{ textAlign: 'right' }}
                value={aPayer}
                onChange={handleChange}
                onBlur={() => console.log('majReste();aMettreAJour("factureAMAJ");')}
              />
            </TableCell>
            <TableCell width="30%" rowSpan={3} align="center">
              <Button variant="contained" color="primary" onClick={handleDownloadPDF} startIcon={<PdfIcon />}>
                Télécharger PDF
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div style={{ overflowY: 'scroll', maxHeight: 100 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" width="100">
                Date
              </TableCell>
              <TableCell align="right" width="10px">
                Par
              </TableCell>
              <TableCell align="right" width="90px">
                Montant
              </TableCell>
              <TableCell align="center" width="80px">
                Mode
              </TableCell>
              <TableCell align="center">Réf.</TableCell>
              {/* ... Autres colonnes si nécessaire ... */}
            </TableRow>
          </TableHead>

          <TableBody id="tbodyReglement">
            {reglements.map((reglement, index) => (
              <TableRow key={index} id={`tr_rg_${reglement.id}`}>
                <TableCell align="center">{reglement.dateReg}</TableCell>
                <TableCell align="center">{reglement.effectuePar}</TableCell>
                <TableCell align="right">{reglement.montant}</TableCell>
                <TableCell align="center">{reglement.modePaiement}</TableCell>
                <TableCell align="center">{reglement.reference}</TableCell>
                {/* ... Autres cellules si nécessaire ... */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Divider></Divider>
      <Table>
        <TableBody>
          <TableRow>
            {modesPaiement.map((modePaiement, index) => (
              <TableCell key={index} style={{ verticalAlign: 'middle' }} width="25%" align="center">
                <TextField
                  id={`mode_${index + 1}`}
                  placeholder={modePaiement.libelleReduit}
                  onKeyPress={(event) => console.log('ajouterReglementListener(event);')}
                  size="small"
                />
              </TableCell>
            ))}
          </TableRow>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell width="25%">
                  <TextField
                    id="ESP"
                    placeholder="ESP"
                    onKeyPress={(event) => console.log('ajouterReglementListener(event);')}
                    size="small"
                  />
                </TableCell>
                <TableCell width="25%" align="right">
                  <TextField
                    id="CHQ"
                    placeholder="CHQ"
                    onKeyPress={(event) => console.log('ajouterReglementListener(event);')}
                    size="small"
                  />
                </TableCell>

                <TableCell width="25%" align="right">
                  <TextField
                    id="CB"
                    placeholder="CB"
                    onKeyPress={(event) => console.log('ajouterReglementListener(event);')}
                    size="small"
                  />
                </TableCell>

                <TableCell width="25%" align="right">
                  <TextField
                    id="VIR"
                    placeholder="VIR"
                    onKeyPress={(event) => console.log('ajouterReglementListener(event);')}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <TableRow>
            <TableCell colSpan={4}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell width="55%">
                      <DatePicker value={selectedDate} onChange={(newValue) => setSelectedDate(newValue)} />
                    </TableCell>
                    <TableCell width="45%" align="right">
                      <TextField
                        id="majRef"
                        placeholder="Référence du paiement"
                        onKeyPress={(event) => console.log('ajouterReglementListener(event);')}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

const RechercheDemandes = () => {
  const [formValues, setFormValues] = useState({
    nomPatient: '',
    referenceExterne: '',
    nomOrganisme: '',
    nomMedecin: '',
    facture: '',
    par: '',
    dateDebut: '',
    dateFin: '',
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    console.log('Searching for demandes with:', formValues);
    // Implement search functionality here
  };

  return (
    <Paper sx={{ p: 2, height: 'auto', bgcolor: 'transparent' }}>
      <Typography variant="h6" gutterBottom>
        Recherche des demandes
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Nom du patient"
              name="nomPatient"
              value={formValues.nomPatient}
              onChange={handleChange}
              fullWidth
              placeholder="Nom du patient"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Référence externe"
              name="referenceExterne"
              value={formValues.referenceExterne}
              onChange={handleChange}
              fullWidth
              placeholder="Référence externe"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Organisme"
              name="nomOrganisme"
              value={formValues.nomOrganisme}
              onChange={handleChange}
              fullWidth
              placeholder="Organisme"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Médecin traitant"
              name="nomMedecin"
              value={formValues.nomMedecin}
              onChange={handleChange}
              fullWidth
              placeholder="Médecin traitant"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Num. Facture"
              name="facture"
              value={formValues.facture}
              onChange={handleChange}
              fullWidth
              placeholder="Num. Facture"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Saisi par"
              name="par"
              value={formValues.par}
              onChange={handleChange}
              fullWidth
              placeholder="Saisi par"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Du JJ/MM/AAAA"
              name="dateDebut"
              value={formValues.dateDebut}
              onChange={handleChange}
              fullWidth
              placeholder="Du JJ/MM/AAAA"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Au JJ/MM/AAAA"
              name="dateFin"
              value={formValues.dateFin}
              onChange={handleChange}
              fullWidth
              placeholder="Au JJ/MM/AAAA"
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Rechercher
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

const ComptesRendus = () => {
  return (
    <Paper sx={{ p: 2, bgcolor: 'transparent' }}>
      <Typography variant="h6" gutterBottom>
        Comptes Rendus
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Actions</TableCell>
              <TableCell align="center">ETAT</TableCell>
              <TableCell align="center">MODIFIE LE</TableCell>
              <TableCell align="center">PAR</TableCell>
              <TableCell align="center">REMIS</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const ActionButtons = () => {
  // Fonction pour gérer le clic sur "Nouvelle demande"
  const handleNouvelleDemande = () => {
    // Ajoutez ici la logique pour gérer "Nouvelle demande"
    console.log('Nouvelle demande et patient');
  };

  // Fonction pour gérer le clic sur "Enregistrer la demande"
  const handleEnregistrerDemande = () => {
    // Ajoutez ici la logique pour gérer "Enregistrer la demande"
    console.log('Enregistrer la demande');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" sx={{ height: 35 }} onClick={handleNouvelleDemande}>
            Nouvelle demande
          </Button>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="center">
          <Button variant="contained" color="secondary" sx={{ height: 35 }} onClick={handleEnregistrerDemande}>
            Enregistrer la demande
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const Demande: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('demandePat');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case 'demandePat':
        return <DemandePat />;
      case 'demandeEx':
        return <DemandeEx />;
      case 'DemandeDetail':
        return <DemandeDetail />;
      case 'DocumentZone':
        return <DocumentZone />;
      case 'ComptesRendus':
        return <ComptesRendus />;
      default:
        return <DemandePat />;
    }
  };

  return (
    <Container sx={{ mt: 4, fontFamily: 'Poppins, sans-serif' }}>
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
          py: 4,
          background: 'linear-gradient(135deg, #2CBF89, #2C96BF)',
          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          color: '#fff',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', letterSpacing: '0.05em' }}>
          Bienvenue sur la Page d'Accueil
        </Typography>
      </Box>

      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          mb: 3,
          borderRadius: '10px',
          background: '#f5f5f5',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          indicatorColor="primary"
          textColor="primary"
          sx={{
            '& .MuiTab-root': {
              fontWeight: '500',
              transition: 'color 0.3s, transform 0.3s',
              fontSize: '1rem',
              '&:hover': {
                color: '#000DFF',
                transform: 'scale(1.1)',
              },
            },
            '& .MuiTabs-indicator': {
              height: '5px',
              borderRadius: '5px',
              backgroundColor: '#000DFF',
            },
          }}
        >
          <Tab icon={<HomeIcon />} label="Patient" value="demandePat" />
          <Tab icon={<AssignmentIcon />} label="Examen" value="demandeEx" />
          <Tab icon={<DescriptionIcon />} label="Demande" value="DemandeDetail" />
          <Tab icon={<ReceiptIcon />} label="Devis" value="DocumentZone" />
          <Tab icon={<SummarizeIcon />} label="Comptes Rendus" value="ComptesRendus" />
        </Tabs>
      </Box>

      <Box
        sx={{
          bgcolor: 'white',
          p: 4,
          borderRadius: '15px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s',
          '&:hover': {
            boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        {renderComponent()}
      </Box>
    </Container>
  );
};

export default Demande;
