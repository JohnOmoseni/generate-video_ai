import { View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string | number;
  subtitle?: string;
  containerStyles?: string;
  titleStyles?: string;
};

const InfoBox = ({ title, subtitle, containerStyles, titleStyles }: Props) => {
  return (
    <View className={twMerge("gap-10", containerStyles)}>
      <ThemedText
        className={twMerge("text-center font-psemibold", titleStyles)}
      >
        {title}
      </ThemedText>

      <ThemedText
        type="gray"
        className="text-center font-pregular text-sm text-gray-100"
      >
        {subtitle}
      </ThemedText>
    </View>
  );
};

export default InfoBox;
