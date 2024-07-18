const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "{"noiseKey":{"private":{"type":"Buffer","data":"IDuMloRNnx9YYA5ZOTYU8LKW6WTeI+iNwauIm9aWwWE="},"public":{"type":"Buffer","data":"0BX5BLwxID6nPZ4tIoJVp6bKnbV3pSUlhqmA1aVQiw8="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"EBY6bQWyKpXCQTE2I3Y5Dqk28ROCSYGss+8+SatEPn8="},"public":{"type":"Buffer","data":"INJuHeaD3yL5COAUWgDhPx4dsbjkqdHGc5lOBewfwlg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"8CNKB3yBLQTBLIpANn7aKdscHcNiJASquhJMH1Penls="},"public":{"type":"Buffer","data":"0Dh0QnF9dUvIvLgYxMmfHPYUn/e9Ai/gRePmvXwd8R8="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"KG3L8gmjo/fAvS+gQlXZYz5/zz1I+vUKXeiZyMxgjFY="},"public":{"type":"Buffer","data":"o5MQ1yeZMVPJHyg4hDVUi7zYPVG7Kx66J6ThbIOcZ3Q="}},"signature":{"type":"Buffer","data":"CmhTXNdrxZO3VwnXnJWsERSzFf/KvmTOdKcHjiDhCbgxK+DDcnC3f/cAlCliO57rXfC229IBXP7dkiF351jTCA=="},"keyId":1},"registrationId":125,"advSecretKey":"2RO+0iF8BIeyUhRtEpK1Aicgx1uer1mrOSoKSQYhAGw=","processedHistoryMessages":[{"key":{"remoteJid":"994402877963@s.whatsapp.net","fromMe":true,"id":"54E1FC986CF0C9F83D2568049E2DCA31"},"messageTimestamp":1721303278},{"key":{"remoteJid":"994402877963@s.whatsapp.net","fromMe":true,"id":"1BF131026DC3ACE2B38F50B9944D25F3"},"messageTimestamp":1721303278},{"key":{"remoteJid":"994402877963@s.whatsapp.net","fromMe":true,"id":"9EBCDDAA62B3DBB46F88057A1C8A82C0"},"messageTimestamp":1721303286},{"key":{"remoteJid":"994402877963@s.whatsapp.net","fromMe":true,"id":"CAF433317971230206B062CBBD062F84"},"messageTimestamp":1721303286}],"nextPreKeyId":61,"firstUnuploadedPreKeyId":61,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"vvC8k4pfQ8CeJ9YzOiiBXg","phoneId":"58449e1e-e7ad-4864-ad5e-e42eb474cb38","identityId":{"type":"Buffer","data":"lkz8tkQ79HQEEXackKbkr6XVD4A="},"registered":true,"backupToken":{"type":"Buffer","data":"gZ8xN2n4tgW81jMbLogVytsD5vU="},"registration":{},"pairingCode":"JGWS1V86","me":{"id":"994402877963:2@s.whatsapp.net","name":"𝙂𝙊𝙅𝙊-𝘽𝙊𝙏"},"account":{"details":"CJ38wNYCEOeB5LQGGAEgACgA","accountSignatureKey":"wjyF0KXfg5sINELtJDOkQULF7nW9BI5xojHFTI+VFk0=","accountSignature":"Dm3NLXRNRIjFFtKh3Egyr42fIspwln2D4g3IfprigKKOYjg3klZf991DfeiP375hA/EzPZkkwU8c7ndHamykBw==","deviceSignature":"+w/2XsaQhOpB9r+5UGMBLGue6kAV52KUhpMgm+Uy5GlbVI1jKVRwQYamQtvN4P+97CK1NIMHoEuUHUNWeDoOAQ=="},"signalIdentities":[{"identifier":{"name":"994402877963:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BcI8hdCl34ObCDRC7SQzpEFCxe51vQSOcaIxxUyPlRZN"}}],"platform":"android","lastAccountSyncTimestamp":1721303274,"myAppStateKeyId":"AAAAAOgy"}"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
