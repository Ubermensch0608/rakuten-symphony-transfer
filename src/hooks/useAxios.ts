import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = <T>(url: string) => {
  const [linkData, setLinkData] = useState<T>();
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${PROXY}${url}`);
        setLinkData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return linkData;
};

export default useAxios;
