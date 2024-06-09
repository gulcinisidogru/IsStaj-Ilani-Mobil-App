/*import { createContext, useState } from 'react';
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteFoodIds, setFavoriteFoodIds] = useState([]);

  function addFavorite(id) {
    setFavoriteFoodIds((current) => [...current, id]);
  }

  function removeFavorite(id) {
    setFavoriteFoodIds((current) => current.filter((foodId) => foodId !== id));
  }
  const value = {
    ids: favoriteFoodIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider; */



// src/store/favoriteJobsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const favoriteJobsSlice = createSlice({
  name: 'favoriteJobs',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.ids.push(action.payload);
    },
    removeFavorite(state, action) {
      state.ids = state.ids.filter(id => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteJobsSlice.actions;

export default favoriteJobsSlice.reducer;

