// Create web server   
// Create a web server that listens on port 3000. When you navigate to http://localhost:3000, it should display a welcome message. When you navigate to http://localhost:3000/comments, it should display a message that says "This is a page of comments".

const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    if(request.url === '/comments'){
        response.end('This is a page of comments');
    } else {
        response.end('Welcome');
    }
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}); 

