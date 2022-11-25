const app = require('./app');
const PORT = 5555 || process.env.PORT


app.listen(PORT, ()=>{
    console.log(`server listening at http://localhost:${PORT}`);
})