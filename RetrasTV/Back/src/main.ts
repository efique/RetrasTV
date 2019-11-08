import bodyParser from 'body-parser';
import chalk from 'chalk';
import express from 'express';
// import passport from 'passport';

import { AgenceController } from './Agence/Agence.controller';
import { AuthController } from './Auth/auth.controller';
import './Auth/auth.strategy';
import logger from './logger.tools';
import { setupDb } from './setup-db';
import { UsersController } from './Users/Users.contoller';

async function bootstrap() {
  // create db connection
  await setupDb();

  // initialize express app
  const app = express();

  // tslint:disable-next-line:no-require-imports
  const cors = require('cors');
  app.use(
    cors({
      origin: '*',
    }),
  );

  // set the body parser
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(bodyParser.json());

  // call custom middleware for logging globally
  app.use(logger);

  // exemple of a GET route on '/' pattern
  // app.get('/', (req: express.Request, res: express.Response) => {
  //   return res.json({ message: 'Hello world !' });
  // });

  // load to Frontend
  // app.get('*', (req, res) => {
  //   res.sendFile('localhost:4200');
  // });

  // use custom controller on '/inscription' pattern
  const agenceRoutes = await new AgenceController().getRoutes();
  app.use('/agence', agenceRoutes);

  const usersRoutes = await new UsersController().getRoutes();
  app.use(
    '/users',
    // passport.authenticate('jwt', { session: false }),
    usersRoutes,
  );

  const authRoutes = await new AuthController().getRoutes();
  app.use('/auth', authRoutes);

  // define application port
  app.listen(3015);

  global.console.log(chalk.green('----- Server up! -----\n'));
}

// start application
bootstrap();