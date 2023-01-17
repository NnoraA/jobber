import { Request, Response, Router } from 'express';
import { User } from '../entity/user';
import { myDataSource } from '../main';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../settings';

export const usersRoute = Router();

usersRoute.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userRepository = myDataSource.getRepository(User);
  try {
    const foundUser = await userRepository.findOneBy({ email });

    if (!foundUser) {
      res.status(400).send({ errors: [{ message: 'User not found' }] });
      return;
    }

    const isMatch = bcrypt.compareSync(password, foundUser.password);

    if (isMatch) {
      const token = jwt.sign(
        {
          id: foundUser.id,
          email: foundUser.email,
        },
        SECRET_KEY,
        { expiresIn: '1h' }
      );
      res.send({ token });
    } else {
      res.status(400).send({ errors: [{ message: 'Wrong password' }] });
    }
  } catch (error) {
    console.error(error);
  }
});

usersRoute.post('/register', async (req: Request, res: Response) => {
  const { password, email } = req.body;

  const userRepository = myDataSource.getRepository(User);
  try {
    const foundUser = await userRepository.findOneBy({ email });

    if (foundUser) {
      res.status(400).send({ errors: [{ message: 'User already exist' }] });
      return;
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const manager = userRepository.manager;
    const user = manager.create<User>(User, {
      ...req.body,
      password: hashedPassword,
    });
    const savedUser = await userRepository.save(user);

    if (savedUser) {
      res.send({ user: savedUser });
    } else {
      res.status(500).send({ errors: [{ message: 'Did not save' }] });
    }
  } catch (error) {
    console.error(error);
  }
});
