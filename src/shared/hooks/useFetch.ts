import { consume, HTTPMethod } from "@/utils/ConsumeApi";
import { useEffect, useState } from "react";

export type RequestParams = [
  url: string,
  method: HTTPMethod,
  body?: { [key: string]: any }
];

export default function useFetch<T>(
  url: string,
  method: HTTPMethod = "GET",
  body?: { [key: string]: any }
): [boolean, Error?, T?] {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const makeRequest = async () => {
      setLoading(true);
      try {
        const result = await consume<T>(url, method, body);
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [loading, error, data];
}
