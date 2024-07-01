import { useState } from "react";
import { FlatList, Image, View, RefreshControl, Platform } from "react-native";
import { useAuthContext } from "@/context/AuthContext";
import { ThemedText } from "@/components/ThemedText";
import { images, ios } from "@/constants";
import SearchInput from "@/components/SearchInput";
import Trending from "../../components/ui/tabs/Trending";
import EmptyState from "../../components/Empty";
import useAppWrite from "@/hooks/useAppWrite";
import VideoCard from "../../components/VideoCard";
import { getAllPosts, getLatestPosts } from "@/lib/appwrite";
import { SafeAreaView } from "react-native-safe-area-context";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { twMerge } from "tailwind-merge";

export default function HomeScreen() {
  const { user } = useAuthContext();
  const username = user?.username;
  const [refreshing, setRefreshing] = useState(false);
  // const {
  //   data: posts,
  //   isLoading: isFetchingPosts,
  //   refetch: refetchPosts,
  // } = useAppWrite(getAllPosts);
  // const { data: latestPosts } = useAppWrite(getLatestPosts);

  const posts = [
    {
      $id: "1",
      title: "John Omoseni",
      thumbnail: "",
      // video: { image },
      creator: { username: "John", avatar: "" },
    },
  ];

  const latestPosts = posts;

  const onRefresh = async () => {
    setRefreshing(true);

    // re-call videos - if any new videos appeared, set refreshing to false
    // await refetchPosts();
    setRefreshing(false);
  };

  const backgroundColor = useThemeColor("background");

  return (
    <SafeAreaView
      className={twMerge("my-3 h-full", ios ? "-mb-2" : "mb-3")}
      style={{ backgroundColor }}
    >
      <View className="w-full flex-1 justify-center px-1">
        <FlatList
          data={posts}
          keyExtractor={(item) => item?.$id}
          renderItem={({ item }) => {
            return (
              <ThemedText className="">
                {item?.title}

                <VideoCard video={item} />
              </ThemedText>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <View className="space-y-8 px-4">
                <View className="mb-6 flex-row items-start justify-between gap-4">
                  <View>
                    <ThemedText
                      type="gray"
                      className="font-pmedium text-sm text-gray-100"
                    >
                      Welcome back
                    </ThemedText>
                    <ThemedText className="font-psemibold text-2xl">
                      {username ?? "User"}
                    </ThemedText>
                  </View>

                  <View className="mt-1.5">
                    <Image
                      source={images.logoSmall}
                      className="h-10 w-10"
                      resizeMode="contain"
                    />
                  </View>
                </View>

                <SearchInput />

                <View className="w-full flex-1 px-8 pt-5">
                  <ThemedText
                    type="gray"
                    className="mb-3 font-pregular text-lg text-gray-100"
                  >
                    Latest videos
                  </ThemedText>

                  <Trending videos={latestPosts as any} />
                </View>
              </View>
            );
          }}
          ListEmptyComponent={() => {
            return (
              <EmptyState
                title="No videos found"
                subtitle="Be the first ome to upload a video"
              />
            );
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
}
