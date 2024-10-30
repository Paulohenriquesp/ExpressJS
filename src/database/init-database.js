import { existsSync } from "fs";

import db from "./index.js";

const initDatabase = async () => {
  if (!existsSync("./locatech.sqlite")) {
    console.log("Criando o banco de dados!");

    // criação de tabela veiculos
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

    // criação de seed veiculos
    await db("veiculos").insert([
      {
        modelo: "Uno",
        marca: "Fiat",
        ano: "2010",
        cor: "Branco",
        valor_diaria: 100,
      },
      {
        modelo: "Gol",
        marca: "Volkswagen",
        ano: "2015",
        cor: "Preto",
        valor_diaria: 150,
      },
      {
        modelo: "Onix",
        marca: "Chevrolet",
        ano: "2018",
        cor: "Prata",
        valor_diaria: 200,
      },
    ]);

    // criação de seed pessoas
    await db("pessoas").insert([
      {
        nome: "João Silva",
        cpf: "123.456.789-00",
        telefone: "(11) 91234-5678",
        email: "joao.silva@email.com",
      },
      {
        nome: "Maria Oliveira",
        cpf: "987.654.321-00",
        telefone: "(21) 98765-4321",
        email: "maria.oliveira@email.com",
      },
      {
        nome: "Carlos Pereira",
        cpf: "456.789.123-00",
        telefone: "(31) 92345-6789",
        email: "carlos.pereira@email.com",
      },
    ]);

    // criação de seed para alugueis
    await db("alugueis").insert([
      {
        id_veiculo: 1,
        id_pessoa: 1,
        data_inicio: "2024-01-10",
        data_fim: "2024-01-15",
        valor_total: 500, // 5 dias * valor diária do Uno (100)
      },
      {
        id_veiculo: 2,
        id_pessoa: 2,
        data_inicio: "2024-02-05",
        data_fim: "2024-02-10",
        valor_total: 750, // 5 dias * valor diária do Gol (150)
      },
      {
        id_veiculo: 3,
        id_pessoa: 3,
        data_inicio: "2024-03-01",
        data_fim: "2024-03-07",
        valor_total: 1200, // 6 dias * valor diária do Onix (200)
      },
    ]);
  }
};

export default initDatabase;
