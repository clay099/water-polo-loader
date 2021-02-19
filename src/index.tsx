import React from "react";
import "./styles.scss";
import Ball from "./ball.svg";
import { IAppProps } from "./interfaces";

const App = ({
	className = "",
	size = "3rem",
	animation = ["grow", "spin", "color"],
}: IAppProps) => {
	let animationString = Array.isArray(animation)
		? animation.join(" ")
		: animation;

	return (
		<div className={`ball__container ${className}`}>
			<Ball
				style={{ width: size, height: size }}
				className={animationString}
			/>
		</div>
	);
};

export default App;
