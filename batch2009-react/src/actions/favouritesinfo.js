import { FETCH_FAVOURITES_INFO, UPDATE_FAVOURITES_INFO } from "../types";
import api from "../api";

export const FavouritesInfoFetched = favourites => ({
	type: FETCH_FAVOURITES_INFO,
	favourites
});

export const FavouritesInfoUpdated = favourites => ({
	type: UPDATE_FAVOURITES_INFO,
	favourites
});

//============================================================
export const fetchFavouritesInfo = () => dispatch =>
	api.user.fetchFavouritesInfo().then(favourites => {
		dispatch(FavouritesInfoFetched(favourites));
	});

export const updateFavouritesInfo = data => dispatch =>
	api.user.updateFavouritesInfo(data).then(favourites => {
		dispatch(FavouritesInfoUpdated(favourites));
	});

export const addNewFieldInFavourites = data => dispatch =>
	api.user.addNewFieldInFavourites(data).then(favourites => {
		dispatch(FavouritesInfoUpdated(favourites));
	});

export const deleteFavField = data => dispatch =>
	api.user.deleteFavField(data).then(favourites => {
		dispatch(FavouritesInfoUpdated(favourites));
	});