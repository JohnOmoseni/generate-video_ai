import { View, Text } from "react-native";

const Loader = ({ loading }: { loading?: boolean }) => {
	if (!loading) return null;
	return (
		<View>
			<Text>Loader</Text>
		</View>
	);
};

export default Loader;
