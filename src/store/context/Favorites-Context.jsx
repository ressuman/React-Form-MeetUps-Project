import axios from "axios";
import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const baseURL = import.meta.env
          .VITE_REACT_BACKEND_FIREBASE_DATABASE_SERVER_URL;
        const response = await axios.get(`${baseURL}/favorites.json`);

        const loadedFavorites = [];

        for (const key in response.data) {
          loadedFavorites.push({
            id: key,
            title: response.data[key].title,
            image: response.data[key].image,
            address: response.data[key].address,
            description: response.data[key].description,
          });
        }

        setUserFavorites(loadedFavorites);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    }

    fetchFavorites();
  }, []);

  async function addFavoriteHandler(favoriteMeetup) {
    try {
      const baseURL = import.meta.env
        .VITE_REACT_BACKEND_FIREBASE_DATABASE_SERVER_URL;
      const response = await axios.post(
        `${baseURL}/favorites.json`,
        favoriteMeetup
      );

      const generatedId = response.data.name;
      const newFavorite = {
        id: generatedId,
        ...favoriteMeetup,
      };

      setUserFavorites((prevUserFavorites) => {
        return prevUserFavorites.concat(newFavorite);
      });
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  }

  async function removeFavoriteHandler(meetupId) {
    try {
      const baseURL = import.meta.env
        .VITE_REACT_BACKEND_FIREBASE_DATABASE_SERVER_URL;
      await axios.delete(`${baseURL}/favorites/${meetupId}.json`);

      setUserFavorites((prevUserFavorites) => {
        return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
      });
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext, FavoritesContextProvider };
