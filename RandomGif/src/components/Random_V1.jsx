import axios from "axios";
import { useEffect, useState } from "react";

// const API_KEY = process.env.VITE_APP_API_KEY;
const API_KEY = import.meta.env.VITE_APP_API_KEY;
const Random = () => {
  const [gif, setGif] = useState("");
  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img width="500" height={500} src={gif} alt="Random Gif" />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};
export default Random;
