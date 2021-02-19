export type AnimationStyles = "bounce" | "color" | "spin" | "grow";

export type IAppProps = {
	size?: string;
	className?: string;
	animation?: AnimationStyles[] | AnimationStyles;
};
