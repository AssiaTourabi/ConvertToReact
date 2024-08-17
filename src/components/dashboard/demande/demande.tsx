'use client';

import React, { useState } from 'react';
import { PictureAsPdf as PdfIcon, Save as SaveIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
    <Paper sx={{ p: 2, backgroundColor: '#EEEEFF' }}>
      <Typography variant="h6" gutterBottom>
        Patient
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Code"
            variant="outlined"
            fullWidth
            value={patient.codePatient}
            onChange={(e) => handleInputChange('codePatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={9}>
          <TextField
            label="Nom"
            variant="outlined"
            fullWidth
            value={patient.nomPatient}
            onChange={(e) => handleInputChange('nomPatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="CIN"
            variant="outlined"
            fullWidth
            value={patient.cinPatient}
            onChange={(e) => handleInputChange('cinPatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Date de naissance"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            fullWidth
            value={`${patient.anneePatient}-${patient.moisPatient}-${patient.jourPatient}`}
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            value={patient.agePatient}
            onChange={(e) => handleInputChange('agePatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Sexe</FormLabel>
            <RadioGroup value={patient.sexePatient} onChange={(e) => handleInputChange('sexePatient', e.target.value)}>
              <FormControlLabel value="M" control={<Radio />} label="M" />
              <FormControlLabel value="F" control={<Radio />} label="F" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Tél"
            variant="outlined"
            fullWidth
            value={patient.telPatient}
            onChange={(e) => handleInputChange('telPatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Adresse"
            variant="outlined"
            fullWidth
            value={patient.adressePatient}
            onChange={(e) => handleInputChange('adressePatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Fax"
            variant="outlined"
            fullWidth
            value={patient.faxPatient}
            onChange={(e) => handleInputChange('faxPatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
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
          <TextField
            label="Antécédants"
            variant="outlined"
            fullWidth
            value={patient.antecsPatient}
            onChange={(e) => handleInputChange('antecsPatient', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button variant="contained" color="primary" onClick={handleNewRequest} sx={{ width: 60, height: 60 }}>
            +
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

const DemandeEx: React.FC = () => {
  const [examens, setExamens] = useState([]);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setExamens((prev) => [...prev, { code: '', detail: '', delai: '', prix: '' }]);
      event.preventDefault();
    }
  };

  const handleExamenChange = (index: number, field: keyof (typeof examens)[0], value: string) => {
    setExamens((prev) => prev.map((examen, i) => (i === index ? { ...examen, [field]: value } : examen)));
  };

  const removeExamen = (index: number) => {
    setExamens((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Paper sx={{ p: 2, backgroundColor: '#EEFFEE' }}>
      <Typography variant="h6" gutterBottom>
        Examens
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField label="Code" variant="outlined" fullWidth onKeyPress={handleKeyPress} />
        </Grid>
        <Grid item xs={9}>
          <TextField label="Détail" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Liste des examens</Typography>
          {examens.map((examen, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={3}>
                <TextField
                  label="Code"
                  variant="outlined"
                  fullWidth
                  value={examen.code}
                  onChange={(e) => handleExamenChange(index, 'code', e.target.value)}
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  label="Détail"
                  variant="outlined"
                  fullWidth
                  value={examen.detail}
                  onChange={(e) => handleExamenChange(index, 'detail', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="secondary" onClick={() => removeExamen(index)}>
                  -
                </Button>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
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

  return (
    <Paper sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="Réf. Demande" value={refDemande} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Réf. E. (Externe)" value={refDemandeExterne} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="D.D (Date D)" value={dateD} fullWidth />
        </Grid>

        <Grid item xs={6}>
          <TextField label="D.S (Date S)" value={dateS} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Org. (Organisme)" value={idOrganisme} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Pay. " value={payeurDemande} />
        </Grid>
        <Grid item xs={6}>
          <TextField label="M.T." value={matriculeAffilie} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Matricule" value={matriculeAffilie} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label=" Aff." value={matriculeAffilie} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Lien" value={lienParente} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="PEC" value={numPriseEnCharge} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Complément" value={complement} fullWidth multiline rows={3} />
        </Grid>
        <Grid item xs={12}>
          <RadioGroup row aria-labelledby="filter-by-status" name="filter-by-status">
            <FormControlLabel value="aujourdhui" control={<Radio />} label="Norm" />
            <FormControlLabel value="hier" control={<Radio />} label="Urg" />
            <FormControlLabel value="enCours" control={<Radio />} label="T.Urg" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Paper>
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
    <Paper sx={{ padding: 2, backgroundColor: '#FAEEFF', height: 500 }}>
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
              <span id="payeurFacture">Nom du Payeur</span>
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
                      <label htmlFor="majdate">Date</label>
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
    <Paper sx={{ p: 2, bgcolor: '#EEEEFF', height: 'auto' }}>
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
    <Paper sx={{ p: 2, bgcolor: '#EBFCFE' }}>
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
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gestion des Demandes
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <DemandePat />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <DemandeEx />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <DemandeDetail
              refDemande="12345"
              dateD="2024-08-17"
              refDemandeExterne="67890"
              dateS="2024-08-18"
              idOrganisme="ABC"
              payeurDemande="John Doe"
              matriculeAffilie="0001"
              lienParente="Parent"
              numPriseEnCharge="1234"
              complement="N/A"
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <DocumentZone />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <RechercheDemandes />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <ComptesRendus />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
            <ActionButtons />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Demande;
