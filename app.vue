<template>
  <div>
    <TheHeader />

    <NuxtPage />
  </div>
</template>

<style>
html,
body {
  scroll-behavior: smooth;
}

@font-face {
  font-family: Gotham SSm;
  src: url("https://cdn-design.tesla.com/tds-fonts/3.x/woff2/GothamSSm-Book_Web.woff2")
    format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: Gotham SSm;
  src: url("https://cdn-design.tesla.com/tds-fonts/3.x/woff2/GothamSSm-Medium_Web.woff2")
    format("woff2");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

html {
  font-family: Gotham SSm;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>