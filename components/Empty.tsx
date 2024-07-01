import { View, Image } from "react-native";
import { images } from "@/constants";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const EmptyState = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <View className="items-center justify-center px-2">
      <ThemedText className="mt-2 text-center font-psemibold text-xl">
        {title}
      </ThemedText>
      <ThemedText type="gray" className="font-pmedium text-sm text-gray-100">
        {subtitle}
      </ThemedText>
      <Image
        source={images.empty}
        className="h-[215px] w-[270px]"
        resizeMode="contain"
      />

      <CustomButton
        title="Create video"
        onPress={() => router.push("/create")}
        containerStyles="my-5 w-full"
      />
    </View>
  );
};

export default EmptyState;
