const express = require('express');
const routes = require('./routes');

//crear una aplicación de express
const app = express();


app.use('/',routes());

//servidor y puerto
const host = '0.0.0.0';
const port = 3000;

app.listen(port, host, ()=>{
    console.log('El servidor esta corriendo');
})

















// var https = require('https');
// var parseString = require('xml2js').parseString;
// var xml = '';

// function xmlToJson(url, callback) {
//   var req = https.get(url, function(res) {
//     var xml = '';

//     res.on('data', function(chunk) {
//       xml += chunk;
//     });

//     res.on('error', function(e) {
//       callback(e, null);
//     }); 

//     res.on('timeout', function(e) {
//       callback(e, null);
//     }); 

//     res.on('end', function() {
//       parseString(xml, function(err, result) {
//         callback(null, result);
//       });
//     });
//   });
// }

// var url = "https://www.radioformula.com.mx/podcast/lamanopeluda.xml"
// // https://testwebrf.radioformula.com.mx/podcast/atandocabos.xml
// // https://www.radioformula.com.mx/podcast/lamanopeluda.xml
// xmlToJson(url, function(err, data) {
//   if (err) {
//     // Handle this however you like
//     return console.err(err);
//   }
//   var json = '';
//   var json = data;

  
//   // Do whatever you want with the data here
//   // Following just pretty-prints the object
//   // console.log(JSON.stringify(data,null,2));
//   console.log(json.rss.channel[0].item[0]);
//   // console.log(data.rss.channel[0].item[0].enclosure[0].$.url);
//   app.get('/podcast', function (req, res) {
//     res.send(json);
//   });
//   //console.log(JSON.stringify(data, null, 2));
// });
 



// app.listen(3000, () => {
//     console.log("El servidor está inicializado en el puerto 3000");
//    });