import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
	function isCurrentLocation({ isActive }) {
		return isActive ? styles["active"] : undefined;
	}

	return (
		<nav className={styles["app-nav"]}>
			<NavLink to={"/"} className={isCurrentLocation}>
				<i className="fa-solid fa-home"></i>
			</NavLink>
			<NavLink  to={"/my-parties"} className={isCurrentLocation}>
				<i className="fa-solid fa-list"></i>
			</NavLink>
			<NavLink to={"/settings"} className={isCurrentLocation}>
				<i className="fa-solid fa-gear"></i>
			</NavLink>
		</nav>
	);
};

export default Nav;
