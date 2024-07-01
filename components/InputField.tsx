import { Ionicons } from "@expo/vector-icons";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { useState, type ComponentProps } from "react";
import { icons } from "@/constants";
import { ThemedText } from "./ThemedText";
import { twMerge } from "tailwind-merge";
import Colors from "@/constants/Colors";

interface InputProps {
  label?: string;
  value: string;
  dir?: "left" | "right";
  placeholder?: string;
  icon?: ComponentProps<typeof Ionicons>["name"];
  handleChangeText?: (e: any) => void;
  containerStyles?: string;
}

function InputField({
  label,
  value,
  dir = "left",
  placeholder = "",
  icon,
  handleChangeText,
  containerStyles,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const colorScheme = useColorScheme() ?? "dark";
  const {
    [colorScheme]: { dark, dark100, text: color },
  } = Colors;

  return (
    <View className={`w-full space-y-2 ${containerStyles}`}>
      <ThemedText className="font-pmedium text-base capitalize">
        {label}
      </ThemedText>

      <View
        style={{ backgroundColor: dark, borderColor: dark100 }}
        className={twMerge(
          "relative h-16 w-full flex-row items-center gap-2 rounded-2xl border border-neutral-800 px-2 focus-within:border-orange-500",
          label === "Password" && "pr-3",
        )}
      >
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#333"
          onChangeText={handleChangeText}
          style={{ color }}
          className="flex-1 font-psemibold text-base"
          secureTextEntry={label === "Password" && !showPassword}
        />

        {label === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="-mt-0.5 h-6 w-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default InputField;
