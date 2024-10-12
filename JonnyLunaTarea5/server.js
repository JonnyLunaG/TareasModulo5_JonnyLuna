import http from 'http';
import { getProducts } from './app.js'; 

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET') {
        if (req.url === '/products') {
            const products = await getProducts(); 
            res.statusCode = 200;
            res.end(JSON.stringify(products));
        } else if (req.url.startsWith('/products/')) {
            const id = req.url.split('/')[2];
            const products = await getProducts();
            const product = products.find(prod => prod.id === parseInt(id));

            if (!product) {
                res.statusCode = 404;
                res.end(JSON.stringify({ error: 'Product Not Found' }));
                return;
            } else {
                res.statusCode = 200;
                res.end(JSON.stringify(product));
            }
        }
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

server.listen(3002, () => {
    console.log('Server running on port 3002');
});
