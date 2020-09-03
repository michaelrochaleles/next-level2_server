import express from 'express';

const app = express();

app.use(express.json());

app.get('/',(request,response) => {

    return response.json({status:200, message:"Hello Word"});
    
});

app.listen(3333);

//Parei no video 2 - Minuto  00:49:00