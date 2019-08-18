import { createSelector } from "reselect";
import { 
	LOCATION_COUNTRIES_FETCHED, 
	LOCATION_STATES_FETCHED, 
	LOCATION_CITIES_FETCHED,
	CLEAR_CITIES
} from "../types";

const defaultStore = {
	countries: [],
	states: [],
	cities: []
};

export default function(state = defaultStore, action = {}) {
	switch(action.type) {
		case LOCATION_COUNTRIES_FETCHED:
			return { ...state,  countries: action.countries };
		case LOCATION_STATES_FETCHED:
			return { ...state, states: action.states };
		case LOCATION_CITIES_FETCHED:
			return { ...state, cities: action.cities };
		case CLEAR_CITIES:
			return { ...state, cities: [] };
		default:
			return state;
	}
}

// SELECTORS

export const countriesSelector = state => state.locations.countries;
export const statesSelector = state => state.locations.states;
export const citiesSelector = state => state.locations.cities;

function makeObject(acc, value, index) {
	acc.push({ key: value, value: value, text: value });
	// console.log(acc);
	return acc;
}

export const allCountriesSelector = createSelector(countriesSelector, countries => 
	// console.log(countries)
	countries.reduce(makeObject, [])
);

export const allStatesSelector = createSelector(statesSelector, states => 
	states.reduce(makeObject, [])
);

export const allCitiesSelector = createSelector(citiesSelector, cities => 
	cities.reduce(makeObject, [])
);