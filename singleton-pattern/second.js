const logger = require('./logger');
const logSecond = ()=>{
  logger.printLogCount(); 
  logger.log("Second ...")
  logger.printLogCount();
}

module.exports = logSecond;