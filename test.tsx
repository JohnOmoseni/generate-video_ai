import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Colors from "@/constants/Colors";

export default function HomeScreen() {
	return (
		<ParallaxScrollView
			headerBgColor={{
				light: Colors.light.headerBg,
				dark: Colors.dark.headerBg,
			}}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText>Welcome!</ThemedText>
				<HelloWave />
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText>Step 1: Try it</ThemedText>
				<ThemedText>
					Edit <ThemedText>app/(tabs)/index.tsx</ThemedText> to see changes.
					Press{" "}
					<ThemedText>
						{Platform.select({ ios: "cmd + d", android: "cmd + m" })}
					</ThemedText>{" "}
					to open developer tools.
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText>Step 2: Explore</ThemedText>
				<ThemedText>
					Tap the Explore tab to learn more about what's included in this
					starter app.
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText>Step 3: Get a fresh start</ThemedText>
				<ThemedText>
					When you're ready, run <ThemedText>npm run reset-project</ThemedText>{" "}
					to get a fresh <ThemedText>app</ThemedText> directory. This will move
					the current <ThemedText>app</ThemedText> to{" "}
					<ThemedText>app-example</ThemedText>.
				</ThemedText>
			</ThemedView>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});
