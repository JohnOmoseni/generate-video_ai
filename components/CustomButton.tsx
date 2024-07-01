import { TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";
import Colors from "@/constants/Colors";

type ButtonProps = {
	title: string;
	containerStyles?: string;
	isLoading?: boolean;
	onPress?: () => void;
};

const CustomButton = ({
	title,
	containerStyles,
	isLoading,
	onPress,
}: ButtonProps) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={{ backgroundColor: Colors.dark.secondary }}
			onPress={onPress}
			disabled={isLoading}
			className={`rounded-xl min-h-[60px] font-semibold justify-center items-center ${
				isLoading && "opacity-60"
			} ${containerStyles}`}
		>
			<ThemedText type="button" className="">
				{title}
			</ThemedText>
		</TouchableOpacity>
	);
};

export default CustomButton;
