import axios from "axios";
import { useEffect, useState } from "react";

// const API_KEY = process.env.VITE_APP_API_KEY;
const API_KEY = import.meta.env.VITE_APP_API_KEY;
const Random = () => {
  const [tag, setTag] = useState("dogs");
  const [gif, setGif] = useState("");
  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, []);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};
export default Random;
