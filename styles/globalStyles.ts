import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-display: 16px;
  line-height: 1.5;
}

body {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

`;
