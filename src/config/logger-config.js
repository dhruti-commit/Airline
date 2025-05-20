const {createLogger, format, transport, transports} = require('winston');
const {combine, timestamp, printf} = format;

const logFormat = printf(({level, timestamp, message}) =>{
    return `${level} :${timestamp}: ${message}`
});

const logger = createLogger({
    format : combine(timestamp({format : "YYYY-MM-DD HH:mm:ss"}), logFormat),
    transports : [ new transports.Console(),
        new transports.File({filename : "Combined.log"})
    ]
        
}
)

module.exports = logger;