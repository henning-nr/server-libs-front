const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    console.log(req.url)

    file = ""
    if(req.url === "/react"){
        file = fs.readFileSync("reactjs/index.html")
    }
    
    if(req.url === "/angular"){
        file = fs.readFileSync("angularjs/index.html")

    }

    if(req.url === "/"){
        file = fs.readFileSync("index.html")

        file = file.toString().replace("{{title}}", "Estou na HOME VELHO!!!")

    }
   const fileindex = fs.readFileSync("index.html")
   const fileVanilla = fs.readFileSync("vanillajs/index.html")
   const fileJquery = fs.readFileSync("jqueryjs/index.html")
   const angularjs = fs.readFileSync("angularjs/index.html")
   const reactjs = fs.readFileSync("reactjs/index.html")
   const vuejs = fs.readFileSync("vuejs/index.html")
    res.end(file)
})

server.listen(3000, () => { console.log("No ar 3000") })