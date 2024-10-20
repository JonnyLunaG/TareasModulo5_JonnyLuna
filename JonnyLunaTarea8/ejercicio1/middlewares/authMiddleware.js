const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        return res.status(403).json({ error: 'Falta el header Authorization' });
    }

    const token = authHeader.split(' ')[1];
    
    if (token === 'mysecrettoken') {
        next();
    } else {
        return res.status(403).json({ error: 'Token de autorización inválido' });
    }
};

export default authMiddleware;
