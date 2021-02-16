import React from "react";
import "./styles.scss";
import Ball from "./ball.svg";
import { IAppProps } from "./interfaces";

const App = ({
	className = "",
	size = "300px",
	types = ["color", "bounce"],
}: IAppProps) => {
	let animationString = types.join(" ");
	return (
		<div className={`ball__container ${className}`}>
			<Ball style={{ width: size }} className={animationString} />
		</div>
	);
};

export default App;
