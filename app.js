const express = require('express');
const axios = require('axios');
const dotenv = require('dotvenv');

dotenv.config()

const app = express();
const PORT = 3000;

// Middlewware para servir arquivos estáticos
app.use(express.static('public'));

// Rota para buscar o clima
app.get('api/clima', async (req, res) => {
    const { clima } = req.query;

    if(!cidade) {
        return res.status(400).json({ error: 'Cidade não especificada.'})
    }

    try {
        const apiKey = process.env.API_KEY;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}#units=metric&lang=pt`
                );
            res.json(response.data);

    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados do clima'});
    }

});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));


