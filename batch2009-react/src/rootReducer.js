import { combineReducers } from "redux";

import user from "./reducers/user";
import basicinfo from "./reducers/basicinfo";
import schoolinfo from "./reducers/schoolinfo";
import afternavodayainfo from "./reducers/afternavodayainfo";
import socialaccinfo from "./reducers/socialaccinfo";
import favouritesinfo from "./reducers/favouritesinfo";
import firstthingsinfo from "./reducers/firstthingsinfo";

export default combineReducers({
	user,
	basicinfo,
	schoolinfo,
	afternavodayainfo,
	socialaccinfo,
	favouritesinfo,
	firstthingsinfo
});
