





























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05UdUJrZGdSZ0dBbUFWa1RYYks1OWIxTi83UW5rNVI4ZEdqTStKVnFWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiditrdVUwdDErZWx6YW0wRmJqb3lwb0pRaFV5M0JqLzMydHpHTEU5eXhTbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTDN4aDI4c0RJSktTUzVTaDhmV1A5bkhhS1k1V0FqQTZ1SllEdlQyaVhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJINGF6aHFCS0ZhN3lDK2NSeWpmL3pZUEFPUGFYcS9iTmh4ME00ZGxJWjJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBMaEpTb2J0L0M5a0d3VjErVkJhMk9kcUpaSlZ4NjExQW1lZHM3VUFvSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikxvelh4Sjh0SE85aE1pMFI4d2ttelNWYzZMTTM1cEJ0YTJhL2UwUUJWMk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZwWEx4Wk8yRDNscktCMk1rQko1YkhraDNHRlVYOUdXMWtYMGtYd3Jsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWdmUk4weUJyUHpwbmFocXNIWE1XT0JXWktJSzN5NkFGMURCMlRsZnRUUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlVbSt5WHBCZ2FGUGw0cWlEM1p0bEd0aUc0MkQ2RC9SdEpiSndrRUFKL3BxL2syVC9NVkRrLzJHTTFLeDdvemdMUTFGQnRaeVZxRWwxbHpjYUxoTkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiJSRTMycUN1M3BKN3FmOHIxc2tlemZ2b21yd21sNjRXYm1kYkY1TjBuUm9VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzZXJXS0dKQVNHeVRjRVA2azNrbDlRIiwicGhvbmVJZCI6IjdmNDczNjUzLTI4ZWEtNDIyMi1iOGE1LTc1YjRhYWZhZWE0YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLR2ZKR01GQVBPMlVlMVR0U1JreG5nQkV0UW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHJGaC9xTThsbUExVDBsSmpQUURTVGhGUXVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjY4UThXRkM1IiwibWUiOnsiaWQiOiIyNjM3Nzc3NTYxODQ6NDdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSm9zaHVhbWFtYm8xIEVjb3VuQmFuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNV0t1ZTRHRUtQWHBMb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzUEg4MTh0d2huSjlxNThTTlZNTE9vYUVyL2JPQS9PUmFtcUljVWltaWdrPSIsImFjY291bnRTaWduYXR1cmUiOiJiNkZGYTJiVHh5cU9nWWkwRW1tN3l0T3ZkWWFTcU84eWptV1RzZldaSTdKZ0Y0ODZlZkNMYVZkRjB0VVhPUUJSY1J0SHBNZWhWWlpQRkFxYmlHTGVBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUnREOXRVVGRXSWdNdVFmUFRjcWp5SXN1ZlRBSzliM1NVOVZIdG5VS2MzSWprbDQ2czRBUVZScEJBZ0d6djhvY015VEl0ZEpXVENmZW02T0svRmJCRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3Nzc3NTYxODQ6NDdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkR4L05mTGNJWnlmYXVmRWpWVEN6cUdoSy8yemdQemtXcHFpSEZJcG9vSiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjg0ODU2MX0=',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "Joshuamambo1",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "263777756184",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Joshuamambojzz',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/tmtn0f.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
