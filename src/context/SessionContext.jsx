import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const SessionContext = createContext();

export const SessionContextProvider = ({ children }) => {
  const { items, addItem, removeItem } = useLocalStorage('FAVORITES_V1');

  const ExistsOnFavorites = (pokemonId) => {
    return items.some((item) => item.id === pokemonId);
  };

  return (
    <SessionContext.Provider
      value={{
        favorites: items,
        addFavorite: addItem,
        removeFavorite: removeItem,
        ExistsOnFavorites,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};