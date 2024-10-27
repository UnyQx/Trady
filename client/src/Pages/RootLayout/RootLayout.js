import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/common/Header/Header";
import styles from "./RootLayout.module.css";
import Nav from "../../Components/common/Nav/Nav";

const RootLayout = () => {
	return (
		<div className={styles["root-layout"]}>
			<Header></Header>
			<div className={styles["content"]} >
				<Outlet></Outlet>
        <br/><br/>
        <br/><br/>
        <br/><br/><br/><br/>
        <br/><br/>
        <br/><br/><br/><br/>
        <br/><br/>
        <br/><br/><br/><br/>
        <br/><br/>
        <br/><br/><br/><br/>
        <br/><br/>
        <br/><br/><br/><br/>
        <br/><br/>
        <br/><br/><br/><br/>
        <br/><br/>
        <br/><br/><br/><br/>
        <br/><br/>
        <br/><br/>
			</div>
			<Nav></Nav>
		</div>
	);
};

export default RootLayout;
