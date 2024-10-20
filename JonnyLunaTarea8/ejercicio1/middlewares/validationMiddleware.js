const validationMiddleware = (req, res, next) => {
    const { name, age, major } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'El nombre ingresado No valido. El nombre debe ser una cadena de texto no vacía.'});
    }

    if (typeof age !== 'number' || age < 0) {
        return res.status(400).json({ error: 'La edad No es válida. La edad Age debe ser un número mayor que cero.' });
    }

    if (!major || typeof major !== 'string' || major.trim() === '') {
        return res.status(400).json({ error: 'El major No es válido. Major debe ser una cadena de texto y no estar vacía.'});
    }
    next();
};

export default validationMiddleware;
