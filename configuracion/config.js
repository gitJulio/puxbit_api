process.env.PORT = process.env.PORT || 7000;

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

const config = {
  db: {
    host: 'dbtiendyn.postgres.database.azure.com',
    port: "5432",
    database: 'gcpuxbit',
    user: 'jbueso@dbtiendyn',
    password: 'Axalon2019..'
  }
};

module.exports = config;