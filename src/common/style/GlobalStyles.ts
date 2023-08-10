import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  html, body {
		font-family: 'Quicksand', sans-serif;

    background: #121212;
    color: #fafafa;

    min-height: 100vh;


  }



	#root {
   min-height: 100vh;
	}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	h1, h2, h3, h4 {
	font-weight: normal;
	}

  `
