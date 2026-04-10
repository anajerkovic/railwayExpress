const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Pozdrav sa Railway servera!');
    });

// Ruta za prikaz slika
app.get('/slike', (req,res) => {
    // Učitavanje slika iz JSON datoteke
    const images = JSON.parse(fs.readFileSync('images.json', 'utf8'));
    res.render("slike.ejs", {
        images: images,
    });
})

app.listen(PORT, () => {
    console.log(`Server pokrenut na portu ${PORT}`);
    });
