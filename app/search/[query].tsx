// import { FlatList, View } from "react-native";
// import { useEffect } from "react";
// import { ThemedText } from "@/components/ThemedText";
// import { useLocalSearchParams } from "expo-router";
// import useAppWrite from "@/hooks/useAppWrite";
// import { searchPosts } from "@/lib/appwrite";
// import VideoCard from "../(tabs)/_ui/VideoCard";
// import SearchInput from "@/components/SearchInput";
// import EmptyState from "../(tabs)/_ui/Empty";
// import ParallaxScrollView from "@/components/ParallaxScrollView";

// const Search = () => {
//   const { query } = useLocalSearchParams();
//   const { data, isLoading, error, refetch } = useAppWrite(() =>
//     searchPosts(query),
//   );

//   useEffect(() => {
//     refetch();
//   }, [query]);

//   return (
//     <ParallaxScrollView>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item?.$id}
//         renderItem={({ item }) => {
//           return (
//             <ThemedText className="">
//               {item?.title}

//               <VideoCard video={item} />
//             </ThemedText>
//           );
//         }}
//         ListHeaderComponent={() => {
//           return (
//             <View className="my-6 px-4">
//               <ThemedText
//                 type="gray"
//                 className="font-pmedium text-sm text-gray-100"
//               >
//                 Search results
//               </ThemedText>
//               <ThemedText className="font-psemibold text-2xl">
//                 {query}
//               </ThemedText>

//               <View className="mb-8 mt-6">
//                 <SearchInput initialQuery={query as string} />
//               </View>
//             </View>
//           );
//         }}
//         ListEmptyComponent={() => {
//           return (
//             <EmptyState
//               title="No videos found"
//               subtitle="No videos found for this search query"
//             />
//           );
//         }}
//       />
//     </ParallaxScrollView>
//   );
// };

// export default Search;
