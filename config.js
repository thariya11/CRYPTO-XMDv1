const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "මෙතනට ඔයාගෙ සෙශන් id එක",
MONGODB: process.env.MONGODB || "මෙතනට ඔයාගෙ mongodb url එක",
AUTO_REACT: process.env.AUTO_REACT || "true",
AUTO_STATUS_VIEW: process.env.AUTO_STATUS_VIEW || "true",
AUTO_RECORDING : process.env.AUTO_RECORDING || "true",
AUTO_TYPING : process.env.AUTO_TYPING || "false",
AUTO_STATUS_REACT : process.env.AUTO_STATUS_REACT || "true"

} 
