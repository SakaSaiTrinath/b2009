// import { normalize } from "normalizr";
import api from "../api";
import { 
	LOCATION_COUNTRIES_FETCHED, 
	LOCATION_STATES_FETCHED, 
	LOCATION_CITIES_FETCHED,
	CLEAR_CITIES
} from "../types";

export const countriesFetched = countries => ({
	type: LOCATION_COUNTRIES_FETCHED,
	countries
});

export const statesFetched = states => ({
	type: LOCATION_STATES_FETCHED,
	states
});

export const citiesFetched = cities => ({
	type: LOCATION_CITIES_FETCHED,
	cities
});

export const clearCities = () => ({
	type: CLEAR_CITIES
});

export const fetchCountries = () => dispatch => {
	api.locations
		.fetchCountries()
		.then(countries => dispatch(countriesFetched(countries)));
}

export const fetchStates = country => dispatch => {
	!!country &&
	api.locations
		.fetchStates(country)
		.then(states => dispatch(statesFetched(states)));
}

export const fetchCities = (country, state) => dispatch => {
	!!country && !!state &&
	api.locations
		.fetchCities(country, state)
		.then(cities => dispatch(citiesFetched(cities)));
}

