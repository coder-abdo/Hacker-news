import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    html{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    *,*::before,*::after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }
    body {
        line-height: 1;
        font-size: 16px;
        color: #202020;
        background-color: #fafafa;
        font-family: Arial, helvetica, sans-serif;
    }
    ul,li,ol{
        list-style: none;
    }
`;
export const StoriesStyle = styled.main`
  max-width: 95vw;
  width: 100%;
  margin: 0 auto;
  padding: 20px 15px;
`;
export const MainTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: "Lobster", cursive;
  color: rgba(102, 153, 51, 1);
  text-shadow: -2px 2px rgb(252, 248, 227), -4px 4px rgba(102, 153, 51, 0.5);
`;
