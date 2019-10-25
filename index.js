const dotenv = require('dotenv')
const fs = require('fs');
const request = require('request');
var argv = require('minimist')(process.argv.slice(2));
const config = dotenv.config().parsed
const trepPath = config.TREP_URL+config.IMAGE_PATH
const computoPath = config.COMPUTO_URL+config.IMAGE_PATH

var usage = function(){
  console.log("Descarga las imagenes de las actas")
  console.log("--------------------------")
  console.log("Este programa descarga las imagenes de las actas de las mesas")
  console.log("Tanto del TREP como del COMPUTO")
  console.log("Las imagenes, por defecto, se almacenan en images/trep y images/computo")
  console.log("--------------------------")
  console.log("node index.js --start 515411 --end 515420")
  console.log("--------------------------")
  console.log("Parametros")
  console.log("--------------------------")
  console.log("--start Numero            Define la mesa de inicio")
  console.log("--end   Numero            (opcional) Define la ultima mesa")
  process.exit()
}
var start = 1
var end = 1
if (typeof argv.start === 'undefined' && typeof process.env.START === 'undefined') {
  usage()
}
start = (typeof argv.start !== 'undefined' ? argv.start : process.env.START)

if (typeof argv.end === 'undefined' && typeof process.env.END === 'undefined') {
  end = start
} else {
  end = (typeof argv.end !== 'undefined' ? argv.end : process.env.END)
}

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    request({url: uri, headers: {
      "Connection": "keep-alive"
    }}).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

for(var i = start; i <= end;i++){
  // Approach 1
  download(trepPath + i + '1' + config.IMAGE_EXT, config.SAVE_PATH + i + '1-trep' + config.IMAGE_EXT, function(){
    console.log('TREP descargado');
  });
  download(computoPath + i + '1' + config.IMAGE_EXT, config.SAVE_PATH + i + '1-computo' + config.IMAGE_EXT, function(){
    console.log('COMPUTO descargado');
  });
}

console.log("🇧🇴🇧🇴🇧🇴 Vamos Bolivia que se puede 🇧🇴🇧🇴🇧🇴")
