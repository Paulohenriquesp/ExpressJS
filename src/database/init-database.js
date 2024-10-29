import { existsSync } from "fs";

import db from "./index.js";

const initDatabase = async () => {
  if (!existsSync("./locatech.sqlite")) {
    console.log("Criando o banco de dados!");

    await db.schema.createTable("veiculos", (table) => {
      table.increments("id").primary();
      table.string("modelo").notNullable();
      table.string("marca").notNullable();
      table.string("ano").notNullable();
      table.string("cor").notNullable();
      table.float("valor_diaria").unsigned().notNullable();
    });

    // criação de tabela pessoas
    await db.schema.createTable("pessoas", (table) => {
      table.increments("id").primary();
      table.string("nome").notNullable();
      table.string("cpf").notNullable();
      table.string("telefone").notNullable();
      table.string("email").notNullable();
    });

    // criação de tabelas alugueis
    await db.schema.createTable("alugueis", (table) => {
      table.increments("id").primary();
      table.integer("id_veiculo").unsigned().notNullable();
      table.integer("id_pessoa").unsigned().notNullable();
      table.date("data_inicio").notNullable();
      table.date("data_fim").notNullable();
      table.float("valor_total").unsigned().notNullable();
      table.foreign("id_veiculo").references("veiculos.id");
      table.foreign("id_pessoa").references("pessoas.id");
    });
  }
};
