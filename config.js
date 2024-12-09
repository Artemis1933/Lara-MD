const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "yrADhaCC#DNAZLBLkIl1Asr-_jVlFh7WRU_HMwKpNzDzE6Qr1RMo", //paste your session_id
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",    
PREFIX: process.env.PREFIX || '.',
AUTOLIKE_STATUS: process.env.AUTOLIKE_STATUS !== undefined ? process.env.AUTOLIKE_STATUS === "true", 
AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '🐥', // For liking status updates(stories)
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS !== undefined ? process.env.AUTO_REPLY_STATUS === "true", 
STATUS_READ_MSG: process.env.STATUS_READ_MSG || '🐥',
AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === "false", 
AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === "true",
AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === "true",
AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === "true", 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === "true",
   /*auto block only for 212 */
AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === "true",
REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === '"true",
NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
OWNER_NAME: process.env.OWNER_NAME || "Artemis fowl",
OWNER_NUMBER: process.env.OWNER_NUMBER || "254755468748",
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "254799939252,254755468748",
WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : true,
