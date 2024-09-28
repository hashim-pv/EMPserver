// importbjson server
const jsonServer= require('json-server')
//create server for emp
const EMPServer =jsonServer.create()
//create middleware
const middleware=jsonServer.defaults()
//set route for json file
const route =jsonServer.router('db.json')
//to available
const PORT= 3000||process.env.PORT

EMPServer.use(middleware)
EMPServer.use(route)
EMPServer.listen(PORT,()=>{
    console.log(`media Player server started at port ${PORT}and awaiting for client request`);
     
})