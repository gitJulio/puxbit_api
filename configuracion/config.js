process.env.PORT = process.env.PORT || 7000;

// process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 60;
// MIN * SEGUNDOS * MILISEGUNDOS
process.env.CADUCIDAD_TOKEN = 240 * 60 * 1000;
process.env.SEED = process.env.SEED || 'es-te-es-el-seed-desarrollo';

const config = {
  app: {
    host: "192.168.2.221",
    api_key: "NTQyODQyNzM2MGE4NWI0MDFjNmMzYjZhMDE5NzgyY2Q",
    backup: false
  },
  db: {
    host: 'dbtiendyn.postgres.database.azure.com',
    port: "5432",
    database: 'puxbit',
    user: 'jbueso@dbtiendyn',
    password: 'Axalon2019..'
  },
  data_token: {
    caducidad_token: 12 * 60 * 1000,
    seed: 'es-te-es-el-seed-desarrol'
  }
};

module.exports = config;