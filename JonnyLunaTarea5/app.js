import { promises as fs } from 'fs';
import path from 'path';

export async function getProducts() {
    try {
        const filePath = path.resolve('products.json'); 
        const data = await fs.readFile(filePath, 'utf-8');
        const products = JSON.parse(data);
        return products;
    } catch (error) {
        console.error('Error leyendo el archivo products.json:', error);
        return [];
    }
}
