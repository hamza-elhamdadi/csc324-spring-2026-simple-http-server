import express from 'express';

const app = express();

app.get('/', function(req, res){
    res.send('<body>one html page</body>');
})

app.get('/cat', function(req, res){
    res.send('<body><img src="https://cataas.com/cat" /></body>');
})

app.get('/data', function(req, res){
    const obj = ['json', 'data'];
    res.json(obj);
});

app.listen(3000, function(){
    console.log('Server listening on port 3000');
});