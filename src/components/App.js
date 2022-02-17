import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
//import youtube from '../apis/youtube'; // now in use by useVideos
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    //setSelectedVideo(response.data.items[0]);
    setSelectedVideo(videos[0]); // videos of course is returned by our custom hook
  }, [videos]); // run this function anytime we get a new list of videos

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} /> {/* formerly onTermSubmit */}
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
