import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
    body {
      margin: 0; line-height: normal;
    }
:root {
--font: 'Poppins', sans-serif;
--font-inherit: inherit;
--font-inter: Inter;

/* font sizes */
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-sm: 14px;
--font-size-2xs: 11px;
--font-size-xl: 20px;

/* Colors */
--color-white: #fff;
--color-gray-100: #181818;
--ina-black: #101820;
--color-gray-200: rgba(24, 24, 24, 0.5);
--color-gray-300: rgba(255, 255, 255, 0.5);
--color-gray-400: rgba(0, 0, 0, 0.15);
--color-gray-500: rgba(0, 0, 0, 0.2);
--color-steelblue: #0074b2;
--color-whitesmoke: #f9f9f9;
--color-limegreen: #1bc80c;
--color-orange: #fe9a04;
--color-crimson: #ea3939;

/* Border radiuses */
--br-xl: 20px;
--br-3xs: 10px;
--br-31xl: 50px;
}

body {
  font-family: 'Poppins', sans-serif;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}


/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
} 

html {
  -webkit-font-smoothing: antialiased;
  touch-action: manipulation;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  font-size: 62.5%;

  @media (max-width: 37.5em) {
    font-size: 50%;
  }

  @media (max-width: 48.0625em) {
    font-size: 55%;
  }

  @media (max-width: 56.25em) {
    font-size: 60%;         
  }
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  color: rgb(var(--text));
  background: rgb(var(--background));
  font-feature-settings: "kern";  
}

svg {
  color: rgb(var(--text));
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
  scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

}`;

`;

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
} 

html {
  -webkit-font-smoothing: antialiased;
  touch-action: manipulation;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  font-size: 62.5%;

  @media (max-width: 37.5em) {
    font-size: 50%;
  }

  @media (max-width: 48.0625em) {
    font-size: 55%;
  }

  @media (max-width: 56.25em) {
    font-size: 60%;         
  }
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  color: rgb(var(--text));
  background: rgb(var(--background));
  font-feature-settings: "kern";  
}

svg {
  color: rgb(var(--text));
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
  scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`
;
