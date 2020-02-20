import { combineReducers } from "redux";

import user from "./reducers/user";
import anns from "./reducers/anns";
import basicinfo from "./reducers/basicinfo";
import schoolinfo from "./reducers/schoolinfo";
import afternavodayainfo from "./reducers/afternavodayainfo";
import socialaccinfo from "./reducers/socialaccinfo";
import favouritesinfo from "./reducers/favouritesinfo";
import firstthingsinfo from "./reducers/firstthingsinfo";
import locations from "./reducers/locations";
import other from "./reducers/other";

export default combineReducers({
  user,
  anns,
  basicinfo,
  schoolinfo,
  afternavodayainfo,
  socialaccinfo,
  favouritesinfo,
  firstthingsinfo,
  locations,
  other
});
