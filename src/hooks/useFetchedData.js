import {useEffect, useState} from 'react';
import axios from 'axios';

export const useFetchedData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios({
      method: "get",
      url: url,
      cancelToken: source.token,
    }).then(res => setData(res.data))
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log('cancelou');
        }
      });
  }, [url]);
  return [data, setData];
};
