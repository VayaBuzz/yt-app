import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]); // the empty array means just run one time.

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };
  // for your return statement you can follow either convention:
  return [videos, search]; // React convention: return array
  //return { videos, onTermSubmit }; // JS Convention: return object
};

export default useVideos;
