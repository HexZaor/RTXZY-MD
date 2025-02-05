global.owner = ['6285348242252', '6285246133184']  
global.mods = ['6285348242252', '6285246133184'] 
global.prems = ['6285348242252',  '6285246133184']
global.nameowner = 'AnshorXD'
global.numberowner = '6285348242252' 
global.mail = 'mr.4n5@hi2.in' 
global.gc = 'https://chat.whatsapp.com/HPrthdWC0cTCLSvokQd8Y6'
global.instagram = 'https://www.instagram.com/anshorfalahi'
global.wm = '© AnsBot'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'AnsBot'
global.maxwarn = '5' // Peringatan maksimum Warn

global.autobio = false // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = true // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: true)
global.spam = true // Set true/false untuk anti spam (default: true)
global.gcspam = false // Set true/false untuk menutup grup ketika spam (default: false)
    
global.jid = '120363041666209765@g.us'

//INI WAJIB DI ISI!//
global.btc = 'ansbot' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

//Gausah diganti
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

global.APIKeys = { 
  'https://api.botcahx.eu.org': global.btc
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
