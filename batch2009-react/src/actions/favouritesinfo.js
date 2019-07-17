import { FETCH_FAVOURITES_INFO } from "../types";
import api from "../api";

export const FavouritesInfoFetched = favourites => ({
	type: FETCH_FAVOURITES_INFO,
	favourites
});

export const fetchFavouritesInfo = () => dispatch =>
	api.user.fetchFavouritesInfo().then(favourites => {
		dispatch(FavouritesInfoFetched(favourites));
	});
