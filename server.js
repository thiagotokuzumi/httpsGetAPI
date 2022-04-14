const https = require('https');

const url = 'https://jsonmock.hackerrank.com/api/moviesdata?Year=2015&data=Title';

https.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var filmesTitle = JSON.parse(body);
        var count=filmesTitle.data;
        count=count.length;

        for(var i = 0; i < count; i++){
            
            console.log(filmesTitle.data[i].Title);
        }
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});