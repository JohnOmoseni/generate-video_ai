import { Image, View } from "react-native";
import { images } from "@/constants";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/CustomButton";
import { Redirect, router } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useAuthContext } from "@/context/AuthContext";

const Welcome = () => {
	const { isLoading, isAuthenticated } = useAuthContext();

	if (!isLoading && isAuthenticated) return <Redirect href="/home" />;

	return (
		<ParallaxScrollView>
			<View className="w-full items-center">
				<Image
					source={images.logo}
					className="w-[130px] h-[34px]"
					resizeMode="contain"
				/>

				<Image
					source={images.cards}
					className="max-w-[380px] w-full h-[300px]"
					resizeMode="contain"
				/>

				<View className="relative mt-5">
					<ThemedText className="text-center text-3xl font-bold font-pblack">
						Discover endless possibilities with{" "}
						<ThemedText type="secondary" className="">
							Aora
						</ThemedText>
					</ThemedText>
					<Image
						source={images.path}
						className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
						resizeMode="contain"
					/>
				</View>

				<ThemedText type="gray" className="text-base my-5 text-center">
					Where Creativity Meets Innovation: Embark on a Journey of Limitless
					Exploration with Aora
				</ThemedText>

				<CustomButton
					title="Continue with email"
					containerStyles="w-full mt-6"
					onPress={() => {
						router.push("/signin");
					}}
				/>
			</View>
		</ParallaxScrollView>
	);
};

export default Welcome;
