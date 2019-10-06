import React, { useEffect, useState } from "react";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import { GlobalStyle, StoriesStyle, MainTitle } from "../styles/StoriesStyles";
export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();
  useEffect(() => {
    getStoryIds().then(data => data && setStoryIds(data));
  }, []);
  return (
    <>
      <GlobalStyle />
      <StoriesStyle data-testid="stories-container">
        <MainTitle>Hacker News</MainTitle>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesStyle>
    </>
  );
};
