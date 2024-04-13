const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
  switch (url) {
    case "/":
        console.log("запрос по url = '/'")
      break;
    case "/game":
      console.log("запрос по url = '/game'")
      break;
    case "/vote":
      console.log("запрос по url = '/vote'")
      break;
    default:
      console.log("необрабатываемый запрос")
  }
})