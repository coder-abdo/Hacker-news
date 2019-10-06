import React, { useState, useEffect, memo } from "react";
import { mapTime } from "../mappers/mapTime";
import { getStory } from "../services/hnApi";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/StoryStyle";
export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>
          <span>{story.title}</span>
        </a>
      </StoryTitle>
      <StoryMeta>
        <span className="story__by" data-testid="story-by">
          <StoryMetaElement color="#000">By: {story.by}</StoryMetaElement>
        </span>
        <span className="story__time" data-testid="story-time">
          <StoryMetaElement color="#000">
            Posted: {mapTime(story.time)}
          </StoryMetaElement>
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
});
