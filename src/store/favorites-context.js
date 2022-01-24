import { createContext,useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0  
});

function FavoritesContextProvider(props) {
    const [useFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUseFavorites) => {
            return prevUseFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoritesHandler(meetupId) {
        setUserFavorites(prevUseFavorites => {
            return prevUseFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return useFavorites.some(meetup => meetup.Id === meetupId)
    }
    const context = {
       favorites: useFavorites,
       totalFavorites: useFavorites.length
    };


    return (
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
    );
}