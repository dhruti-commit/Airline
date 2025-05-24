const express = require('express');

const {ServerConfig , Logger} =  require('./config');

const app = express();

app.listen(ServerConfig.PORT, () => {
    console.log(`Listening at port : ${ServerConfig.PORT}`);
    // LoggerConfig.info("Server started successfully",{});
})