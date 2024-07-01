import { View, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { icons } from "@/constants";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router, usePathname } from "expo-router";
import { useState } from "react";

interface InputProps {
  initialQuery?: string;
}

function SearchInput({ initialQuery }: InputProps) {
  const color = useThemeColor("text");
  const [query, setQuery] = useState(initialQuery ?? "");
  const pathname = usePathname();

  const handleSearch = () => {
    if (!query) {
      return Alert.alert(
        "Missing query",
        "Please input something to search results across database",
      );
    }

    if (pathname.startsWith("/search")) router.setParams({ query });
    else router.push(`/search/${query}`);
  };

  return (
    <View className="group relative h-16 w-full flex-row items-center justify-start gap-2 overflow-hidden rounded-2xl border border-neutral-800 px-2 focus-within:border-orange-500">
      <TextInput
        style={{ color }}
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#cdcde0"
        onChangeText={(e) => setQuery(e)}
        className="font-regular mt-0.5 flex-1 text-base"
      />
      <TouchableOpacity onPress={handleSearch}>
        <Image source={icons.search} className="h-5 w-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

export default SearchInput;
