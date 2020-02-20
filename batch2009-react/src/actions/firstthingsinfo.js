import { FETCH_FIRST_THINGS_INFO, UPDATE_FIRST_THINGS_INFO } from "../types";
import api from "../api";

export const FirstThingsInfoFetched = firstthings => ({
	type: FETCH_FIRST_THINGS_INFO,
	firstthings
});

export const FirstThingsInfoUpdated = firstthings => ({
	type: UPDATE_FIRST_THINGS_INFO,
	firstthings
});

// =======================================================
export const fetchFirstThingsInfo = username => dispatch =>
	api.user.fetchFirstThingsInfo(username).then(firstthings => {
		dispatch(FirstThingsInfoFetched(firstthings));
	});

export const updateFirstThingsInfo = data => dispatch =>
	api.user.updateFirstThingsInfo(data).then(firstthings => {
		dispatch(FirstThingsInfoUpdated(firstthings));
	});

export const addNewFieldInFirstThings = data => dispatch =>
	api.user.addNewFieldInFirstThings(data).then(firstthings => {
		dispatch(FirstThingsInfoUpdated(firstthings));
	});

export const deleteFTField = data => dispatch =>
	api.user.deleteFTField(data).then(firstthings => {
		dispatch(FirstThingsInfoUpdated(firstthings));
	});

export const updateFTVisibilty = visibility => dispatch =>
	api.user.updateFTVisibilty(visibility).then(firstthings => {
		dispatch(FirstThingsInfoUpdated(firstthings));
	});
