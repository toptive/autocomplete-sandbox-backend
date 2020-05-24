const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = 3000;

if (!process.env.GOOGLE_PLACES_API_KEY) throw new Error('Google Places API KEY is required');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get('/v1/autocomplete', routes.findAddress);

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))