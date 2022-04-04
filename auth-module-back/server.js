const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

var corsOptions = {
  origin: 'http://localhost:4200',
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');
const Role = db.role;

db.sequelize.sync();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Gamus application.' });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
