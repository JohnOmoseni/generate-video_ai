import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";

const Error = ({ error, message }: { error?: null; message?: string }) => {
	if (!error) return null;

	return (
		<View className="">
			<SafeAreaView>
				<ThemedText>Error</ThemedText>
				<ThemedText type="gray" className="">
					{message ?? ""}
				</ThemedText>
			</SafeAreaView>
		</View>
	);
};

export default Error;
