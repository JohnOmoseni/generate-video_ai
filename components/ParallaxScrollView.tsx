import { useThemeColor } from "@/hooks/useThemeColor";
import type { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { SafeAreaView } from "react-native-safe-area-context";

const HEADER_HEIGHT = 250;

type ViewProps = PropsWithChildren<{
  headerBgColor?: { dark: string; light: string };
}>;

export default function ParallaxScrollView({ children }: ViewProps) {
  const backgroundColor = useThemeColor("background");

  return (
    <SafeAreaView className="h-full" style={{ backgroundColor }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={styles.content}
          className="my-6 w-full items-center justify-center px-4"
        >
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: 8,
  },
});
