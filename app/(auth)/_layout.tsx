import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useThemeColor } from "@/hooks/useThemeColor";

const AuthLayout = () => {
  const background = useThemeColor("background");

  return (
    <>
      <Stack>
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
      </Stack>

      <StatusBar backgroundColor={background} style="light" />
    </>
  );
};

export default AuthLayout;
