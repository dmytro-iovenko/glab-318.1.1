var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "/catalog",
  },
  {
    text: "orders",
    href: "/orders",
  },
  {
    text: "account",
    href: "/account",
  },
];

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader("Content-Type", "text/html");

  res.write('<nav style="position: relative; margin-bottom: 1rem;">');
  menuLinks.forEach((item) => {
    res.write(
      `<a style="padding: 0 1rem;text-transform: uppercase;text-decoration: none;" href="${item.href}" target="_blank">${item.text}</a>`
    );
  });
  res.write("</nav>");
  console.log(req.url);
  switch (req.url) {
    case "/about":
      res.write("<h1>About page</h1>");
      break;
    case "/catalog":
      res.write("<h1>Catalog page</h1>");
      break;
    case "/orders":
      res.write("<h1>Orders page</h1>");
      break;
    case "/account":
      res.write("<h1>Account page</h1>");
      break;
    default:
      res.write('<h1 style="color: red">Hello World!</h1>');
      res.write("<p>I wonder what else we can send...</p>");
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
