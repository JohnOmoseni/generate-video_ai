import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
	},
	rowFlex: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		alignItems: "center",
		justifyContent: "center",
		verticalAlign: "middle",
	},
	rowFlexBtwn: {
		justifyContent: "space-between",
	},
	flexColumn: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	subtitle: {
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: 8 /* 8px */,
		//  maxWidth: "60ch",
		paddingLeft: 12 /* 12px */,
		paddingRight: 12 /* 12px */,
		textAlign: "center",
		fontSize: 20 /* 20px */,
		lineHeight: 1 /* 28px */,
	},

	inputReset: {
		borderStyle: undefined,
		backgroundColor: "transparent",
		width: "100%",
		overflow: "hidden",
	},

	authBtn: {
		marginTop: 32,
		width: "100%",
		paddingTop: 12,
		paddingBottom: 12,
		fontSize: 20,
		lineHeight: 20,
	},

	paddingForm: {
		marginBottom: 50,
		marginTop: 32,
		paddingLeft: 12,
		paddingRight: 12,
	},

	paddingSection: {
		paddingHorizontal: 0,
		paddingVertical: 32,
	},
});

export const containerStyles = StyleSheet.create({
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
