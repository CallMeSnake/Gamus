const express = require('express');
const path = require('path');

const app = express();
const root = __dirname + '/dist/gamus';

app.use(express.static(root));
app.get('/*', (_, res) => res.sendFile('index.html', { root }));

const cors = require('cors');
const bodyParser = require('body-parser');

const jsonParser = express.json();

app.use(jsonParser);

var corsOptions = {
  origin: ['http://localhost:4200', 'https://gamus-project.herokuapp.com'],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./app/models');
const Role = db.role;

db.sequelize.sync();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Gamus application.' });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: 'user',
  });

  Role.create({
    id: 2,
    name: 'admin',
  });
}
