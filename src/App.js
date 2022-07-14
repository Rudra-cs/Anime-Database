import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const api = await fetch("https://api.jikan.moe/v4/top/anime");

    const data = await api.json();
    setTopAnime(data.data.slice(0, 5));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&limit=15&order_by=title`
    );

    const data = await temp.json();
    setAnimeList(data.data);
  };

  useEffect(() => {
    getTopAnime();
    return () => {};
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent
          HandleSearch={handleSearch}
          search={search}
          AnimeList={animeList}
          SetSearch={setSearch}
        />
      </div>
    </div>
  );
};

export default App;
