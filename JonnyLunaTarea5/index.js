import http from 'http';

const products = [
    { 
        id: 1,
        name: 'Laptop',
        price: 999.99,
        category: 'Electronics', 
    },
    { 
        id: 2,
        name: 'Chair',
        price: 49.99,
        category: 'Furniture',
    },
    { 
        id: 3,
        name: 'Pen',
        price: 1.99,
        category: 'Stationery',
    }
];

const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'application/json')
    
    if(req.method === 'GET'){
        if (req.url === '/products') {
            res.statusCode = 200;
            res.end(JSON.stringify(products));  
        }else if (req.url.startsWith('/products/')) {
            const id =  req.url.split('/')[2];
            res.statusCode = 200;
            const product = products.find(prod => prod.id === parseInt(id))
            if(!product){
                res.statusCode = 404;
                res.end('Product Not Found');
                return
            }else{
                res.statusCode = 200;
                res.end(`Tu Producto es:\n ${JSON.stringify(product)}`);
            }      
        }
    }else{
        res.statusCode = 404
        res.end('Not found')
    }
});

server.listen(3002, () => {
    console.log('Server running on port 3002');
});
