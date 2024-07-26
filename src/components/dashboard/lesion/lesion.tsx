'use client';

import React, { useState } from 'react';
import {
  Add as AddIcon,
  ChevronRight as ChevronRightIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import { Box, Button, Card, CardContent, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

const LesionItem = ({ itemId, label, children, onAdd, onEdit, onDelete }) => {
  const hasChildren = React.Children.count(children) > 0;
  return (
    <TreeItem
      itemId={itemId}
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 1 }}>
          <Typography variant="body1">{label}</Typography>
          <Box>
            <Tooltip title="Ajouter une lésion enfant">
              <IconButton onClick={onAdd} size="small">
                <AddIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Modifier cette lésion">
              <IconButton onClick={onEdit} size="small">
                <EditIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            {!hasChildren && (
              <Tooltip title="Supprimer cette lésion">
                <IconButton onClick={onDelete} size="small">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Box>
      }
    >
      {children}
    </TreeItem>
  );
};

const Lesion = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formType, setFormType] = useState('add');
  const [formData, setFormData] = useState({ code: '', name: '', description: '' });

  const handleOpenForm = (type) => {
    setFormType(type);
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
    setFormData({ code: '', name: '', description: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    console.log('Ajouter une lésion racine', formData);
    handleCloseForm();
  };

  const handleEdit = () => {
    console.log('Modifier la lésion', formData);
    handleCloseForm();
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ padding: 1, backgroundColor: '#f5f5f5', borderRadius: 1, marginBottom: 2 }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Listes des Lésions
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', marginTop: 1 }}>
          Ajouter, Modifier, Supprimer Lesion
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 3, textAlign: 'end' }}>
        <Tooltip title="Ajouter une lésion racine">
          <IconButton
            color="primary"
            onClick={() => handleOpenForm('add')}
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
        </Tooltip>
      </Box>
      {formVisible && (
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
            {formType === 'add' ? 'Ajouter une lésion' : 'Modifier la lésion'}
          </Typography>
          <Stack spacing={2}>
            <TextField label="Code" name="code" value={formData.code} onChange={handleInputChange} fullWidth />
            <TextField label="Nom" name="name" value={formData.name} onChange={handleInputChange} fullWidth />
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              fullWidth
            />
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={formType === 'add' ? handleAdd : handleEdit}
                sx={{ width: '200px' }}
              >
                {formType === 'add' ? 'Ajouter' : 'Modifier'}
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleCloseForm} sx={{ width: '200px' }}>
                Annuler
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <SimpleTreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ flexGrow: 1, overflowY: 'auto' }}
          >
            <LesionItem
              itemId="1"
              label="Lésion Bénigne"
              onAdd={() => handleOpenForm('add')}
              onEdit={() => handleOpenForm('edit')}
              onDelete={handleCloseForm}
            >
              <LesionItem
                itemId="2"
                label="Tissu Adipeux"
                onAdd={() => handleOpenForm('add')}
                onEdit={() => handleOpenForm('edit')}
                onDelete={handleCloseForm}
              >
                <LesionItem
                  itemId="3"
                  label="Lipome"
                  onAdd={() => handleOpenForm('add')}
                  onEdit={() => handleOpenForm('edit')}
                  onDelete={handleCloseForm}
                />
                <LesionItem
                  itemId="4"
                  label="Cholecystite Chronique Lithiasique"
                  onAdd={() => handleOpenForm('add')}
                  onEdit={() => handleOpenForm('edit')}
                  onDelete={handleCloseForm}
                />
              </LesionItem>
              <LesionItem
                itemId="5"
                label="Polype Colique"
                onAdd={() => handleOpenForm('add')}
                onEdit={() => handleOpenForm('edit')}
                onDelete={handleCloseForm}
              >
                <LesionItem
                  itemId="6"
                  label="Polype Hyperplasique"
                  onAdd={() => handleOpenForm('add')}
                  onEdit={() => handleOpenForm('edit')}
                  onDelete={handleCloseForm}
                />
              </LesionItem>
            </LesionItem>
          </SimpleTreeView>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Lesion;
