import React, { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setData(data);
        setIsPending(false);
        setError({ error: false });
      } catch (err) {
        setIsPending(false);
        setError(err);
      }
    };
    getData(url);
  }, [url]);

  return [data, isPending, error];
};
