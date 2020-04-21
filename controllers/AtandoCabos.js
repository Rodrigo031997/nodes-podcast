var https = require('https');
var parseString = require('xml2js').parseString;

exports.atandocabos = (req,res)=>{
    var xml = '';
    function xmlToJson(url,callback){
        var req = https.get(url,function(res){
            var xml = '';

            res.on('data',function(chuck){
             xml +=chuck;
            });

            res.on('error',function(e){
                callback(e,null);
            });
            
            res.on('timeout',function(e){
                callback(e,null);
            });

            res.on('end',function(){
            parseString(xml,function(err,result){
             callback(null,result);
            });
            });

        });

    }

    
var url = "https://testwebrf.radioformula.com.mx/podcast/atandocabos.xml"

xmlToJson(url, function(err, data) {
  if (err) {
    return console.err(err);
  }
  var json = '';
  var json = data;
  
    res.json(json);

  
});
}


