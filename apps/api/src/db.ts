import { Database } from 'bun:sqlite';
import { join } from 'path';

const dbPath = join(import.meta.dir, '..', 'bancoDeDados.sqlite')
const db = new Database(dbPath);

db.exec(`CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)`);

export default db
