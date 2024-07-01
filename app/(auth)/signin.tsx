import { View, Image, Alert } from "react-native";
import { useState } from "react";
import { images } from "@/constants";
import { ThemedText } from "@/components/ThemedText";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { signIn } from "@/lib/appwrite";
import { handleApiError } from "@/lib/utils";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useAuthContext } from "@/context/AuthContext";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser, setIsAuthenticated } = useAuthContext();

  const test = () => {
    router.replace("/home");
  };

  const signin = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please, fill in all the fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const user = await signIn(form.email, form.password);
      console.log(user);

      // set it to global state
      if (setUser && setIsAuthenticated) {
        setUser(user as any);
        setIsAuthenticated(true);
      }

      router.replace("/home");
    } catch (error) {
      const err = error as Error;
      handleApiError(error);

      if (err?.message) Alert.alert("Error", err.message);
    } finally {
      setIsSubmitting(true);
    }
  };

  return (
    <ParallaxScrollView>
      <Image
        source={images.logo}
        className="mt-4 h-[35px] w-[115px]"
        resizeMode="contain"
      />
      <ThemedText className="mt-5 font-psemibold text-2xl font-semibold">
        Log in to Aora
      </ThemedText>

      <InputField
        label="Email"
        value={form.email}
        handleChangeText={(e) => setForm({ ...form, email: e })}
        containerStyles="mt-7"
      />

      <InputField
        label="Password"
        value={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e })}
        containerStyles="mt-7"
      />

      <CustomButton
        title="Sign In"
        containerStyles="w-full mt-7"
        isLoading={isSubmitting}
        onPress={test}
      />

      <View className="flex-row justify-center gap-1.5 pt-4">
        <ThemedText type="gray" className="text-base">
          Don't have an account?
        </ThemedText>
        <Link
          href="/signup"
          className="text-secondary font-psemibold text-base"
        >
          <ThemedText type="link" className="">
            Signup
          </ThemedText>
        </Link>
      </View>
    </ParallaxScrollView>
  );
};

export default SignIn;
