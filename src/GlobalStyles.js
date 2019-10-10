import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  font-size: 16px;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background: ${props => props.theme.background}
  color: ${props => props.theme.contrastText};
}
`;

/*
#a7d2cb -clean
#f2d388 -butter
#c98474 -salmon
#874c62 -eggplant
#faf9ee -yellow
*/
