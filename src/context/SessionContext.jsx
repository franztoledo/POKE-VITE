import { createContext } from 'react';
import { useLocalStorage } from '../hook/useLocalStorage';


export const SessionContext = createContext();

export const SessionContextProvider = ({ children }) => {
  const { items, addItem, removeItem, removeItems } = useLocalStorage('FAVORITES_V1');

  const ExistsOnFavorites = (pokemonId) => {
    return items.some((item) => item.id === pokemonId);
  };

  return (
    <SessionContext.Provider
      value={{
        favorites: items,
        addFavorite: addItem,
        removeFavorite: removeItem,
        removeFavorites: removeItems,
        ExistsOnFavorites,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};