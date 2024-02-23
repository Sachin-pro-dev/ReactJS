import React from "react";
// import memesData from "./memesdata";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage:
      "https://www.egames.news/__export/1654550370338/sites/debate/img/2022/06/06/nicorobin.jpg_903948830.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) =>setAllMemes(data.data.memes));
  },[]);
  

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form-input"
          placeholder="top"
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          className="form-input"
          placeholder="bottom"
          type="text "
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button onClick={getMemeImage} className="form-button">
          Get a new meme image
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme-img" alt="Error"></img>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
