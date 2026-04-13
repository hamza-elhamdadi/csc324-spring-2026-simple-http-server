/* 
    IMPORTANT: This code is just for demonstration purposes.
        We will not use the http module for the rest of this class.
        We'll use express (very soon)
        Express will look similar, but will abstract away the manual details
*/
import http from 'http';

const server = http.createServer();

server.on('request', function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <!DOCTYPE html>
        <html>
            <body>
                <img src="https://cataas.com/cat" />
            </body>
        </html>
        `);

    
}) 

server.listen(3000, function(){
    console.log('Server running');
});