import {
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import useDimensions from "@/hooks/useDimensions";
import { VideoType } from "@/types";
import { Models } from "react-native-appwrite";
import { zoomIn, zoomOut } from "@/lib/animate";
import * as Animatable from "react-native-animatable";
import { ResizeMode, Video } from "expo-av";
import { icons } from "@/constants";

const Trending = ({ videos }: { videos: any[] }) => {
  const [activeCard, setActiveCard] = useState(videos?.[1]);

  const viewableItemsChanged = ({ viewableItems }: { viewableItems: any }) => {
    if (viewableItems.length > 0) {
      setActiveCard(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      horizontal
      data={videos}
      keyExtractor={(item) => item?.$id}
      renderItem={({ item }) => (
        <TrendingItem
          post={item}
          activeItem={activeCard}
          setActiveItem={setActiveCard}
        />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      contentOffset={{ x: 170, y: 0 }}
    />
  );
};

export default Trending;

const TrendingItem = ({
  post,
  activeItem,
}: {
  post: any;
  activeItem: any;
  setActiveItem?: Dispatch<SetStateAction<any>>;
}) => {
  const [playing, setIsPlaying] = useState(false);
  const { width, height } = useDimensions();

  return (
    <Animatable.View
      animation={activeItem === post.$id ? "zoomIn" : "zoomOut"}
      duration={750}
      className=""
    >
      {playing ? (
        <View>
          <Video
            source={{ uri: post.video }}
            style={{ width: width * 0.6, height: height * 0.45 }}
            className="my-5 overflow-hidden rounded-[35px] bg-white/10"
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
          activeOpacity={0.7}
          className="relative items-center justify-center"
          onPress={() => setIsPlaying(true)}
          style={{ width: width * 0.6, height: height * 0.45 }}
        >
          <ImageBackground
            source={{ uri: post.thumbnail }}
            className="my-5 overflow-hidden rounded-2xl shadow-lg shadow-black/40"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="absolutem h-12 w-12"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};
