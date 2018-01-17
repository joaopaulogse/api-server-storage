const { createServer } = require("http");
const app = require("./config/express")
const server = createServer(app)


server.listen(4000, '0.0.0.0', ()=>{
    console.log("Servidor de Imagens UP");
})