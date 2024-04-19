const http = require("http");
const {
  voteRouteController,
  gameRouteController,
  mainRouteController,
  defaultRouteController,
} = require("./controllers/");
port=3005;
const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
  }
});
server.listen(port);
