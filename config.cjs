
















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05UdUJrZGdSZ0dBbUFWa1RYYks1OWIxTi83UW5rNVI4ZEdqTStKVnFWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiditrdVUwdDErZWx6YW0wRmJqb3lwb0pRaFV5M0JqLzMydHpHTEU5eXhTbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTDN4aDI4c0RJSktTUzVTaDhmV1A5bkhhS1k1V0FqQTZ1SllEdlQyaVhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJINGF6aHFCS0ZhN3lDK2NSeWpmL3pZUEFPUGFYcS9iTmh4ME00ZGxJWjJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBMaEpTb2J0L0M5a0d3VjErVkJhMk9kcUpaSlZ4NjExQW1lZHM3VUFvSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikxvelh4Sjh0SE85aE1pMFI4d2ttelNWYzZMTTM1cEJ0YTJhL2UwUUJWMk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZwWEx4Wk8yRDNscktCMk1rQko1YkhraDNHRlVYOUdXMWtYMGtYd3Jsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWdmUk4weUJyUHpwbmFocXNIWE1XT0JXWktJSzN5NkFGMURCMlRsZnRUUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlVbSt5WHBCZ2FGUGw0cWlEM1p0bEd0aUc0MkQ2RC9SdEpiSndrRUFKL3BxL2syVC9NVkRrLzJHTTFLeDdvemdMUTFGQnRaeVZxRWwxbHpjYUxoTkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiJSRTMycUN1M3BKN3FmOHIxc2tlemZ2b21yd21sNjRXYm1kYkY1TjBuUm9VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzZXJXS0dKQVNHeVRjRVA2azNrbDlRIiwicGhvbmVJZCI6IjdmNDczNjUzLTI4ZWEtNDIyMi1iOGE1LTc1YjRhYWZhZWE0YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLR2ZKR01GQVBPMlVlMVR0U1JreG5nQkV0UW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHJGaC9xTThsbUExVDBsSmpQUURTVGhGUXVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjY4UThXRkM1IiwibWUiOnsiaWQiOiIyNjM3Nzc3NTYxODQ6NDdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSm9zaHVhbWFtYm8xIEVjb3VuQmFuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNV0t1ZTRHRUtQWHBMb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzUEg4MTh0d2huSjlxNThTTlZNTE9vYUVyL2JPQS9PUmFtcUljVWltaWdrPSIsImFjY291bnRTaWduYXR1cmUiOiJiNkZGYTJiVHh5cU9nWWkwRW1tN3l0T3ZkWWFTcU84eWptV1RzZldaSTdKZ0Y0ODZlZkNMYVZkRjB0VVhPUUJSY1J0SHBNZWhWWlpQRkFxYmlHTGVBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUnREOXRVVGRXSWdNdVFmUFRjcWp5SXN1ZlRBSzliM1NVOVZIdG5VS2MzSWprbDQ2czRBUVZScEJBZ0d6djhvY015VEl0ZEpXVENmZW02T0svRmJCRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3Nzc3NTYxODQ6NDdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkR4L05mTGNJWnlmYXVmRWpWVEN6cUdoSy8yemdQemtXcHFpSEZJcG9vSiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjg0ODU2MX0=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'false' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'false' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'false' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Joshuamambo1",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "263777756184",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
