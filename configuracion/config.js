process.env.PORT = process.env.PORT || 7000;

// process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 60;
// MIN * SEGUNDOS * MILISEGUNDOS
process.env.CADUCIDAD_TOKEN_DESKTOP = 240 * 60 * 1000;
process.env.CADUCIDAD_TOKEN_MOVIL = 525600 * 60 * 1000
process.env.SEED = process.env.SEED || 'es-te-es-el-seed-desarrollo';

const config = {
  app: {
    host: "localhost",
    api_key: "NTQyODQyNzM2MGE4NWI0MDFjNmMzYjZhMDE5NzgyY2Q",
    backup: false
  },
  db: {
    host: '52.176.97.243',
    port: "5432",
    database: 'puxbit',
    user: 'puxbit',
    password: 'Axalon2019..'
  },
  data_token: {
    caducidad_token: 12 * 60 * 1000,
    seed: 'es-te-es-el-seed-desarrol'
  }
};
// db: {
//     host: 'dbtiendyn.postgres.database.azure.com',
//     port: "5432",
//     database: 'puxbit',
//     user: 'jbueso@dbtiendyn',
//     password: 'Axalon2019..'
// },
module.exports = config;