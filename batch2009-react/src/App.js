import React from "react";
import { Switch } from "react-router-dom";
import WelcomePage from "./components/pages/WelcomePage";
import DashboardPage from "./components/pages/DashboardPage";
import Page404 from "./components/pages/Page404";
import ArticlePage from "./components/pages/ArticlePage";

import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

import "./App.css";

const subroutes = [
	{
		id: "dashboard",
		exact: true,
		strict: true,
		path: "/dashboard"
	},
	{
		id: "announcements",
		exact: true,
		strict: true,
		path: "/announcements"
	},
	{
		id: "status",
		exact: true,
		strict: true,
		path: "/status"
	},
	{
		id: "feed",
		exact: true,
		strict: true,
		path: "/feed"
	},
	{
		id: "profile",
		exact: true,
		path: "/profile"
	},
	{
		id: "sitegallery",
		exact: true,
		strict: true,
		path: "/sitegallery"
	},
	{
		id: "contact",
		exact: true,
		strict: true,
		path: "/contact"
	},
	{
		id: "settings",
		exact: true,
		strict: true,
		path: "/settings"
	}
];

const App = ({ location }) => (
	<div>
		<Switch>
			<GuestRoute location={location} path="/" exact component={WelcomePage} />
			<UserRoute location={location} path="/article" exact component={ArticlePage} />
			{subroutes.map(route => (
				<UserRoute
					location={location}
					key={route.id}
					path={route.path}
					exact={route.exact}
					strict={route.strict}
					component={() => <DashboardPage subcomponent={route.id} />}
				/>
			))}
			<UserRoute location={location} component={Page404} />
		</Switch>
	</div>
);

export default App;
