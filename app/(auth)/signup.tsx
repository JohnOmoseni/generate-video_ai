import {
  View,
  Image,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { images } from "@/constants";
import { ThemedText } from "@/components/ThemedText";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { handleApiError } from "@/lib/utils";
import { useAuthContext } from "@/context/AuthContext";

const SignUp = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser, setIsAuthenticated } = useAuthContext();

  const signUp = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please, fill in all the fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const user = await createUser(form.email, form.password, form.username);
      console.log(user);

      // set it to global state
      if (setUser && setIsAuthenticated) {
        setUser(user);
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
      <View className="w-full">
        <Image
          source={images.logo}
          className="h-[35px] w-[115px]"
          resizeMode="contain"
        />
        <ThemedText className="mt-10 font-psemibold text-2xl">
          Sign up to Aora
        </ThemedText>

        <InputField
          label="Username"
          value={form.username}
          handleChangeText={(e) => setForm({ ...form, username: e })}
          containerStyles="mt-10"
        />

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
          title="Sign up"
          containerStyles="w-full mt-7"
          isLoading={isSubmitting}
          onPress={signUp}
        />

        <View className="flex-row justify-center gap-1.5 pt-4">
          <ThemedText type="gray" className="text-base">
            Have an account already?
          </ThemedText>
          <Link
            href="/signin"
            className="font-psemibold text-base text-secondary"
          >
            <ThemedText type="link" className="">
              Signin
            </ThemedText>
          </Link>
        </View>
      </View>
    </ParallaxScrollView>
  );
};

export default SignUp;
