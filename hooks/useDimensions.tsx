import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const useDimensions = () => {
	const [dimension, setDimension] = useState({
		width,
		height,
	});

	useEffect(() => {
		const sub = Dimensions.addEventListener("change", ({ window }) => {
			setDimension(window);
		});

		return () => sub?.remove();
	}, []);

	return { width: dimension.width, height: dimension.height };
};

export default useDimensions;
