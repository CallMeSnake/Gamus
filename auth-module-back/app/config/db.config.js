module.exports = {
  HOST: 'db4free.net',
  USER: 'gamusdb',
  PASSWORD: '123456789',
  DB: 'gamusdb',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
