import { Text, type TextProps, StyleSheet, useColorScheme } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { twMerge } from "tailwind-merge";
import Colors from "@/constants/Colors";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "secondary" | "title" | "button" | "link" | "gray";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor("text", { light: lightColor, dark: darkColor });

  const colorScheme = useColorScheme() ?? "dark";
  const {
    [colorScheme]: { secondary100, gray },
  } = Colors;

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "gray" ? { color: gray } : undefined,
        type === "secondary"
          ? {
              color: secondary100,
            }
          : undefined,
        type === "link" ? styles.link : undefined,
        type === "button" ? styles.button : undefined,
        style,
      ]}
      className={twMerge("font-pregular", type === "title" && "text-white")}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    fontSize: 20,
  },
  link: {
    color: "#FF8E01",
  },
});
