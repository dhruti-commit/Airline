const express = require('express');

const {ServerConfig , Logger} =  require('./config');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended : true}));

const apiRoutes = require('./routes');

app.use('/api', apiRoutes);
app.listen(ServerConfig.PORT, () => {
    console.log(`Listening at port : ${ServerConfig.PORT}`);
    // LoggerConfig.info("Server started successfully",{});
})