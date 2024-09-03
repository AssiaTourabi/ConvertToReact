'use client';

import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Box,
  Button,
  CardActions,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

const OrganismesPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    remise: '',
    tel: '',
    email: '',
    type: '',
    ice: '',
    modeleFacture: '',
  });

  const [favoris, setFavoris] = useState([]);
  const [nombreLignes, setNombreLignes] = useState(5);
  const [filtreType, setFiltreType] = useState('Organismes');
  const [searchNom, setSearchNom] = useState('');
  const [searchTel, setSearchTel] = useState('');
  const [showFavoris, setShowFavoris] = useState(false);

  const organismesList = [
    {
      id: 1,
      nom: 'Organisme A',
      remise: '10%',
      tel: '0123456789',
      email: 'a@exemple.com',
      type: 'Type A',
      ice: 'ICE12345',
      modeleFacture: 'CNOPS',
    },
    {
      id: 2,
      nom: 'Organisme B',
      remise: '15%',
      tel: '0987654321',
      email: 'b@exemple.com',
      type: 'Type B',
      ice: 'ICE67890',
      modeleFacture: 'Par défaut',
    },
    {
      id: 3,
      nom: 'Organisme C',
      remise: '20%',
      tel: '0147852369',
      email: 'c@exemple.com',
      type: 'Type C',
      ice: 'ICE54321',
      modeleFacture: 'CNOPS',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to save or update organisme data
  };

  const handleAddToFavorites = (organisme) => {
    if (!favoris.some((favori) => favori.id === organisme.id)) {
      setFavoris([...favoris, { nom: organisme.nom, remise: organisme.remise, id: organisme.id }]);
    }
  };

  const handleRemoveFromFavorites = (id) => {
    setFavoris(favoris.filter((favori) => favori.id !== id));
  };

  const isFavori = (id) => favoris.some((favori) => favori.id === id);

  const filteredList = organismesList
    .filter(
      (organisme) => organisme.nom.toLowerCase().includes(searchNom.toLowerCase()) && organisme.tel.includes(searchTel)
    )
    .filter((organisme) => organisme.type === filtreType || filtreType === 'Organismes');

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 2 }}>
      {/* Ligne avec le titre, champs de recherche, filtre et bouton favoris */}
      <Stack spacing={2} sx={{ marginBottom: 2 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ marginBottom: 2 }}>
          <Typography variant="h5">Listes des Organismes</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <FormControl size="small" sx={{ width: 150 }}>
              <InputLabel>Nombre de lignes</InputLabel>
              <Select value={nombreLignes} onChange={(e) => setNombreLignes(e.target.value)} label="Nombre de lignes">
                <MenuItem value="all">Tout</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ width: 150 }}>
              <InputLabel>Filtre</InputLabel>
              <Select value={filtreType} onChange={(e) => setFiltreType(e.target.value)} label="Filtre">
                <MenuItem value="Organismes">Organismes</MenuItem>
                <MenuItem value="Laboratoires">Laboratoires</MenuItem>
                <MenuItem value="Cliniques">Cliniques</MenuItem>
                <MenuItem value="Associations">Associations</MenuItem>
                <MenuItem value="Médecins Conventionnés">Médecins Conventionnés</MenuItem>
                <MenuItem value="Médecins">Médecins</MenuItem>
                <MenuItem value="Hôpitaux">Hôpitaux</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
            <TextField
              label="Recherche par Nom"
              value={searchNom}
              onChange={(e) => setSearchNom(e.target.value)}
              size="small"
              sx={{ maxWidth: 200 }}
            />
            <TextField
              label="Recherche par Spécialité"
              value={searchTel}
              onChange={(e) => setSearchTel(e.target.value)}
              size="small"
              sx={{ maxWidth: 200 }}
            />
          </Stack>
          <Button variant="outlined" color="primary" onClick={() => setShowFavoris(!showFavoris)}>
            {showFavoris ? 'Cacher Favoris' : 'Voir Favoris'}
          </Button>
          <IconButton
            color="primary"
            onClick={toggleForm}
            sx={{
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: 1,
              '&:hover': {
                backgroundColor: 'white',
              },
            }}
          >
            <AddIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Stack>
      </Stack>
      <Divider sx={{ marginY: 2 }} />
      {showForm && (
        <Box sx={{ padding: 4 }}>
          <Typography variant="h5">Ajouter ou Modifier un Organisme</Typography>
          <Box sx={{ padding: 3 }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="Nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  size="small"
                  required
                />
                <TextField
                  label="Remise"
                  name="remise"
                  value={formData.remise}
                  onChange={handleInputChange}
                  size="small"
                  required
                />
                <TextField
                  label="Téléphone"
                  name="tel"
                  value={formData.tel}
                  onChange={handleInputChange}
                  size="small"
                  required
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  size="small"
                  required
                />
                <Stack direction="row" spacing={2}>
                  <FormControl size="small" sx={{ flexGrow: 1 }}>
                    <InputLabel>Type</InputLabel>
                    <Select name="type" value={formData.type} onChange={handleInputChange} label="Type" required>
                      <MenuItem value="Organisme A">Organisme A</MenuItem>
                      <MenuItem value="Organisme B">Organisme B</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small" sx={{ flexGrow: 1 }}>
                    <InputLabel>Modèle de facture</InputLabel>
                    <Select
                      name="modeleFacture"
                      value={formData.modeleFacture}
                      onChange={handleInputChange}
                      label="Modèle de facture"
                      required
                    >
                      <MenuItem value="CNOPS">CNOPS</MenuItem>
                      <MenuItem value="Par défaut">Par défaut</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                <Button type="submit" variant="contained" color="primary">
                  Enregistrer
                </Button>
              </Stack>
            </form>
          </Box>
          <Divider sx={{ marginY: 2 }} />
        </Box>
      )}

      {showFavoris && (
        <Box sx={{ marginY: 2 }}>
          <Typography variant="h6">Favoris</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#378db7', color: '#fff' }}>
                  <TableCell>Nom</TableCell>
                  <TableCell>Remise</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {favoris.map((favori) => (
                  <TableRow key={favori.id}>
                    <TableCell>{favori.nom}</TableCell>
                    <TableCell>{favori.remise}</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => handleRemoveFromFavorites(favori.id)}
                          startIcon={<DeleteIcon />}
                        ></Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
      <Divider sx={{ marginY: 2 }} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#378db7', color: '#fff' }}>
              <TableCell>
                <Typography variant="h6">Favoris</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6"></Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6"></Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Nom</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Remise</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Téléphone</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Email</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Type</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">ICE</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Modèle Facture</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredList.slice(0, nombreLignes).map((organisme) => (
              <TableRow key={organisme.id}>
                <TableCell>
                  <Button
                    onClick={() =>
                      isFavori(organisme.id) ? handleRemoveFromFavorites(organisme.id) : handleAddToFavorites(organisme)
                    }
                    startIcon={
                      isFavori(organisme.id) ? (
                        <FavoriteIcon
                          color="warning"
                          onClick={() => handleRemoveFromFavorites(organisme.id)}
                          sx={{ cursor: 'pointer', color: '#1c9a8d', fontSize: 24 }}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          onClick={() => handleAddToFavorites(organisme)}
                          sx={{ cursor: 'pointer', color: '#1c9a8d' }}
                        />
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  {' '}
                  <a href={`/situation/${organisme.id}`} target="_blank" rel="noopener noreferrer">
                    Situation
                  </a>
                </TableCell>
                <TableCell>
                  <a href={`/appurer/${organisme.id}`} target="_blank" rel="noopener noreferrer">
                    Appurer
                  </a>
                </TableCell>
                <TableCell>{organisme.nom}</TableCell>
                <TableCell>{organisme.remise}</TableCell>
                <TableCell>{organisme.tel}</TableCell>
                <TableCell>{organisme.email}</TableCell>
                <TableCell>{organisme.type}</TableCell>
                <TableCell>{organisme.ice}</TableCell>
                <TableCell>{organisme.modeleFacture}</TableCell>
                <TableCell>
                  <CardActions>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => console.log('Edit', organisme.id)}
                    ></Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={() => console.log('Delete', organisme.id)}
                    ></Button>
                  </CardActions>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider sx={{ marginY: 2 }} />
    </Box>
  );
};

export default OrganismesPage;
