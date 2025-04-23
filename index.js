process.env.NC_BINARY_BUILD = 'true';
const express = require('express');
const { Noco } = require('nocodb');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.redirect('/dashboard'));

(async () => {
  const server = app.listen(port, () => {
    console.log(`NocoDB running on port ${port}`);
  });
  app.use(await Noco.init({}, server, app));
})();
