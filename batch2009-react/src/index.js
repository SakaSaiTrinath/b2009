import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import rootReducer from "./rootReducer";
import { userLoggedIn } from "./actions/auth";
import registerServiceWorker from "./registerServiceWorker";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.batch2009) {
	const user = { token: localStorage.batch2009 };
	setAuthorizationHeader(localStorage.batch2009);
	store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
