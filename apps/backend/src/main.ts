import * as express from 'express';
import * as path from 'path';
import { DataSource } from 'typeorm';
import { User } from './entity/user';
import { usersRoute } from './routes/users.route';

const app = express();

app.use(express.json());

export const myDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'db',
  entities: [User],
  synchronize: true,
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

app.use('/users', usersRoute);

const port = process.env.port || 3333;
myDataSource.initialize().then((f) => {
  const server = app.listen(port, () => {
    console.log(f.entityMetadatas);

    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
});
