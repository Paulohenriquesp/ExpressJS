import knex from "knex";

const config = {
  cliente: "sqlite3",
  connection: {
    filename: "./locatech.sqlite",
  },
  useNullAsDefault: false,
};

const db = knex(config);

console.log("Conexão com banco de dados estabelecida!");

export default db;