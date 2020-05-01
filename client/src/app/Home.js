import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

import React from "react";

import Header from "./content/header/Header";

const Home = () => {
	return (
		<div className="d-flex">
			<div className="d-flex flex-column w-100">
				<Header/>
			</div>
		</div>
	);
};

export default Home;