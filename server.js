const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    console.log(req.url)

    file = ""

    if(req.url === "/"){
        file = fs.readFileSync("index.html")
        file = file.toString().replace("{{title}}", "Libs JS Frontend")
    }

    if(req.url === "/vanillajs"){
        file = fs.readFileSync("vanillajs/index.html")
    }
    
    if(req.url === "/jquery"){
        file = fs.readFileSync("jqueryjs/index.html")
    }
    
    if(req.url === "/angular"){
        file = fs.readFileSync("angularjs/index.html")
    }
    
    if(req.url === "/react"){
        file = fs.readFileSync("reactjs/index.html")
    }

    if(req.url === "/vue"){
        file = fs.readFileSync("vuejs/index.html")
    }

    res.end(file)
})

server.listen(3000, () => { console.log("No ar 3000") })