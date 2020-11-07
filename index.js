//import server
const server = require('./api/server.js');

//configure port
const PORT = 6000;

//server listen
server.listen(PORT, ()=>{
  console.log(`Server is listening on ${PORT}`);
});