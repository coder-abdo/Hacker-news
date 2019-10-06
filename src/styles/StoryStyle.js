import styled from "styled-components";
export const StoryWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #ccc;
  &:first-of-type {
    border-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
export const StoryTitle = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-size: 25px;
  font-family: "Lobster", cursive;
  line-height: 1.8;
  a {
    text-decoration: none;
    background-color: #f8dc3d;
    color: #2e2e2c;
  }
`;
export const StoryMeta = styled.h3`
  font-size: 20px;
  font-style: italic;
  span: first-child {
    margin-right: 10px;
  }

  .stroy__meta-bold {
    font-weight: bold;
  }
`;
export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${props => props.color || "red"};
`;
