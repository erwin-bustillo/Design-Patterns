const logger = require('./logger');
const logFirst = ()=>{
  logger.printLogCount(); 
  logger.log("First ...")
  logger.printLogCount();
}

module.exports = logFirst;