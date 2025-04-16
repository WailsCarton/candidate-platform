import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 1,
      intitule: "Projet 1",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: ["aujbofub", "eoubi"],
      statut: "Nouveau"
    },
    {
      id: 2,
      intitule: "Projet 2",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "En attente"
    },
    {
      id: 3,
      intitule: "Projet 3",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "Qualifié"
    },
    {
      id: 4,
      intitule: "Projet 4",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "En cours"
    },
    {
      id: 5,
      intitule: "Projet 5",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "Terminé"
    },
    {
      id: 6,
      intitule: "Projet 6",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "Nouveau"
    },
    {
      id: 7,
      intitule: "Projet 7",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "En attente"
    },
    {
      id: 8,
      intitule: "Projet 8",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "Qualifié"
    },
    {
      id: 9,
      intitule: "Projet 9",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "En cours"
    },
    {
      id: 10,
      intitule: "Projet 10",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "Terminé"
    },
    {
      id: 11,
      intitule: "Projet 11",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "Nouveau"
    },
    {
      id: 12,
      intitule: "Projet 12",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "En attente"
    },
    {
      id: 13,
      intitule: "Projet 13",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "Qualifié"
    },
    {
      id: 14,
      intitule: "Projet 14",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "En cours"
    },
    {
      id: 15,
      intitule: "Projet 15",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "Terminé"
    },
    {
      id: 16,
      intitule: "Projet 16",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "Nouveau"
    },
    {
      id: 17,
      intitule: "Projet 17",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "En attente"
    },
    {
      id: 18,
      intitule: "Projet 18",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "Qualifié"
    },
    {
      id: 19,
      intitule: "Projet 19",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "En cours"
    },
    {
      id: 20,
      intitule: "Projet 20",
      partenaire: "Nom du Partenaire",
      date: "XX/XX/XX",
      apprenants: [],
      statut: "Terminé"
    }
  ]
};



const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.list.push(action.payload);
    },
    clearProjects: (state) => {
      state.list = [];
    },
  },
});

export const { addProject, clearProjects } = projectSlice.actions;
export default projectSlice.reducer;
