const prod = {
    catalogAPIurl: "http://gataria.example/catalog",
    imagesAPIurl: "http://gataria.example/images"
};

const dev = {
    catalogAPIurl: "http://dev.gataria.example/catalog",
    imagesAPIurl: "http://dev.gataria.example/images"
};

const config =
  process.env.REACT_APP_STAGE === "prod"
  ? prod
  : process.env.REACT_APP_STAGE === "dev"
    ? dev
    : dev;

export default {
    ...config
};
