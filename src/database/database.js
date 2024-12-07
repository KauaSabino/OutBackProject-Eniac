import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('appDatabase.db');

export const dbExecute = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        sql,
        params,
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const initDatabase = async () => {
  try {
    await dbExecute(`
      CREATE TABLE IF NOT EXISTS Usuarios (
        Id_Usuario INTEGER PRIMARY KEY AUTOINCREMENT,
        Nome TEXT NOT NULL,
        CPF TEXT NOT NULL,
        Email TEXT NOT NULL,
        Senha TEXT NOT NULL
      );
    `);

    await dbExecute(`
      CREATE TABLE IF NOT EXISTS Reservas (
        Id_Reserva INTEGER PRIMARY KEY AUTOINCREMENT,
        Nome TEXT NOT NULL,
        CPF TEXT NOT NULL,
        Unidade TEXT NOT NULL,
        DataReserva TEXT NOT NULL,
        QuantPessoas INTEGER NOT NULL
      );
    `);

    console.log('Tabelas criadas com sucesso!');
  } catch (error) {
    console.error('Erro ao inicializar o banco de dados:', error);
  }
};