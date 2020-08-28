import express from 'express';

const app = express();

app.use(express.json());

// http://

app.delete('/users/:id',(request,response) => {

    console.log(request.params);
    
    const users = [        
        {name:'Michael', age:31},
        {name:'Virginia', age: 20}
    ];

    return response.json(users);
});

app.listen(3333);

//Parei no video 2 - Minuto  00:49:00