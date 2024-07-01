import { handleApiError } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Models } from "react-native-appwrite";

const useAppWrite = (fn: any) => {
  const [data, setData] = useState<Models.Document[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fn();
      console.log(response);
      setData(response);
    } catch (error) {
      const err = error as Error;
      Alert.alert("Error", err?.message);
      handleApiError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () =>
    fetchData().catch((error) => {
      setError(error);
      handleApiError(error);
    });

  return { data, isLoading, error, refetch };
};

export default useAppWrite;
