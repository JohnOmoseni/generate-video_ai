import { View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Models } from "react-native-appwrite";
import { ThemedText } from "@/components/ThemedText";
import { icons } from "@/constants";
import useDimensions from "@/hooks/useDimensions";
import { ResizeMode, Video } from "expo-av";

const VideoCard = ({
  video: videoObject,
  showFavIcon,
}: {
  video: any;
  showFavIcon?: boolean;
}) => {
  const [playing, setIsPlaying] = useState(false);
  const [liked, setIsLiked] = useState(false);
  const { width, height } = useDimensions();

  const {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  } = videoObject;

  const addToFavorites = async () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <View className="relative mb-14 flex-col items-center px-3">
      <View className="flex-row items-start gap-3">
        <View className="flex-1 flex-row items-center justify-center">
          <View className="border-secondary h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-lg border p-0.5">
            <Image
              source={{ uri: avatar }}
              className="h-full w-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="ml-3 flex-1 justify-center gap-y-1">
            <ThemedText className="font-psemibold text-sm" numberOfLines={1}>
              {title}
            </ThemedText>

            <ThemedText
              type="gray"
              className="font-pregular text-xs text-gray-100"
              numberOfLines={1}
            >
              {username}
            </ThemedText>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.menu} className="h-5 w-5" resizeMode="contain" />
        </View>
      </View>

      {playing ? (
        <View>
          <Video
            source={{ uri: video }}
            style={{ width: width, height: height * 0.4 }}
            className="roundex-xl overflow-hidden"
            resizeMode={ResizeMode.CONTAIN}
            useNativeControls
            shouldPlay
            onPlaybackStatusUpdate={(status) => {
              if (status.isLoaded) {
                setIsPlaying(false);
              }
            }}
          />
        </View>
      ) : (
        <TouchableOpacity
          style={{ height: height * 0.32 }}
          activeOpacity={0.7}
          onPress={() => setIsPlaying(true)}
          className="relative w-full items-center justify-center rounded-xl"
        >
          <Image
            source={{ uri: thumbnail }}
            className="m-3 h-full w-full rounded-xl"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="absolute h-12 w-12"
            resizeMode="contain"
          />

          {showFavIcon && (
            <TouchableOpacity onPress={addToFavorites}>
              {liked ? (
                <Image
                  source={icons.plus}
                  className="absolute right-3 top-3 h-6 w-6"
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={icons.plus}
                  className="absolute right-3 top-3 h-6 w-6"
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
