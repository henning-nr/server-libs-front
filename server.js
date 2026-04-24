const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
   const file = fs.readFileSync("index.html")
   const fileVanilla = fs.readFileSync("vanillajs/index.html")
   const fileJquery = fs.readFileSync("jqueryjs/index.html")
   const angularjs = fs.readFileSync("angularjs/index.html")
   const reactjs = fs.readFileSync("reactjs/index.html")
   const vuejs = fs.readFileSync("vuejs/index.html")
    res.end(vuejs)
})

server.listen(3000, () => { console.log("No ar 3000") })