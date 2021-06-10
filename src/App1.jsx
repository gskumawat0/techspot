import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";

const App1 = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/service" component={Service} />
				<Route exact path="/about" component={About} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</>
	);
};
export default App1;
