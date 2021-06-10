import React from "react";
import { NavLink } from "react-router-dom";
import HomeWorkTwoToneIcon from "@material-ui/icons/HomeWorkTwoTone";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import logo from "../src/Images/logopic.png";

const Navbar = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 mx-auto">
						<nav className="navbar navbar-expand-lg ">
							<div className="container-fluid">
								<NavLink className="navbar-brand" to="/">
									{" "}
									<span id="logo">
										<img src={logo} />
									</span>
									Tech Spot
								</NavLink>

								<button
									className="navbar-toggler"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="menulines">&#9776;</span>
								</button>

								<div
									className="collapse navbar-collapse"
									id="navbarSupportedContent"
								>
									<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
										<li className="nav-item">
											<NavLink
												activeClassName="menu_active"
												exact
												className="nav-link "
												aria-current="page"
												to="/"
											>
												<HomeWorkTwoToneIcon /> Home
											</NavLink>
										</li>

										<li className="nav-item">
											<NavLink
												activeClassName="menu_active"
												className="nav-link"
												to="/service"
											>
												<PhonelinkSetupIcon /> Service
											</NavLink>
										</li>

										<li className="nav-item">
											<NavLink
												activeClassName="menu_active"
												className="nav-link"
												to="/contact"
											>
												<ContactMailRoundedIcon />{" "}
												Contact
											</NavLink>
										</li>

										<li className="nav-item">
											<NavLink
												activeClassName="menu_active"
												className="nav-link"
												to="/about"
											>
												<InfoRoundedIcon /> About
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};
export default Navbar;
