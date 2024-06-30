import { useEffect, useState } from "react";

//utils
import axiosInstance from "../utils/axiosInstance";

const useFetchData = (url: string) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(url);
      setFetchedData(response?.data);
      setLoading(false);
    } catch (e) {
      console.log("This is error", e);
    }
  };

  return { fetchedData, loading, refetchData: fetchedData };
};

export default useFetchData;
