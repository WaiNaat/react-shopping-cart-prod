import { useEffect, useState } from 'react';

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [promise, setPromise] = useState<Promise<void>>();
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    const response = await fetch(url);

    try {
      if (!response.ok) {
        throw new Error('데이터를 불러오는 과정에서 문제가 생겼습니다.');
      }

      const fetchedData = await response.json();
      setData(fetchedData);
      setError(null);
    } catch (e) {
      if (!(e instanceof Error)) return;
      setError(e);
    }
  };

  useEffect(() => {
    setData(null);
    setError(null);
    setPromise(fetchData());
  }, [url]);

  const getData = () => {
    if (error) throw error;

    if (data === null && promise) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw promise;
    }

    return data;
  };

  return { getData, fetchData };
};

export default useFetch;
