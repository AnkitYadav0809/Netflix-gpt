import useNowPlaying from "../hooks/useNowPlaying.js";
import Header from "./Header.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import useTrendingMovie from "../hooks/useTrendingMovie.js";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage.js";

const Browser = () => {
  const clickBtn = useSelector((store) => store.gptBtn.clickBtn);

  useNowPlaying();
  useTrendingMovie();

  return (
    <div>
      <Header />
      {clickBtn ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
