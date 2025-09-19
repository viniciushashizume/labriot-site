import { openDb } from '../lib/db';

async function initDb() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS team (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      specialization TEXT,
      category TEXT NOT NULL CHECK(category IN ('leadership', 'students')),
      image TEXT
    );

    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      status TEXT NOT NULL CHECK(status IN ('ongoing', 'completed')),
      startDate TEXT,
      endDate TEXT,
      image TEXT
    );
  `);
  console.log('Banco de dados inicializado com sucesso.');
}

initDb();