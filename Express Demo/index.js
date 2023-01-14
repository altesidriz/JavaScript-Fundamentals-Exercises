const express = require('express');
const handlebars = require('express-handlebars');

let app = express();
let port = 3000;

app.engine('hbs', handlebars());
app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.send('Hello World!')
});

app.get('/catalog',(req, res) => {
    res.send(`Catalogue Page`);
});

app.get('/catalog/:serial_number',(req, res) => {
    res.render('catalog', {layout: false });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
/* let products = [
        '123',
        '456',
        '789'
    ]

    let sn = req.params.serial_number;

    if(products.find(x => x== sn)){
        res.send(`
        <h1>Catalogue Page</h1>
        <p>Product S/N: ${sn}</p>
        `);
    }else{
        res.status(404);
        res.send(`<p>Error 404: Product with S/N: ${sn} Not Found</p>`);
    }
    */
