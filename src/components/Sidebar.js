import React from "react";

const Sidebar = ({ topAnime }) => {
  return (
    <aside>
      <nav>
        <h3>Top Anime</h3>
        {topAnime.map((anime) => {
          return (
            <div key={anime.mal_id}>
              <a href={anime.url} target="_blank" rel="noreferrer">
                {anime.title}
              </a>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
