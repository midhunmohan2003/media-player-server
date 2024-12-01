const JSONServer = require ('json-server')
const MPServer = JSONServer.create()
const router = JSONServer.router('db.json')
const middleware = JSONServer.defaults()

const PORT = 4000 || process.env.PORT

MPServer.use(middleware)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log((`MediaPlayer Server Running at Port:${PORT} & waiting for client request...`));
    
})