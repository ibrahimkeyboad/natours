import { serialize } from 'cookie';
import User from '../../models/userModel';
import connetDB from '../../utils/dbConnect';
import singToken from '../../utils/token';

async function loginController(req, res) {
  connetDB();

  if (req.method !== 'POST') {
    return res.status(401).send('only POST request are allowed.');
  }
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  // console.log(user);

  if (!user || !(await user.correctPassword(password, user.password))) {
    throw new Error('Incorrect email or password');
  }

  let token;
  token = singToken(user._id);
  console.log(token);

  const protect = serialize('token', token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    sameSite: process.env.NODE_ENV == 'production' ? 'none' : 'Lax',
    secure: process.env.NODE_ENV === 'production' ? true : false,
    path: '/',
  });

  res.setHeader('Set-Cookie', protect);
  res.status(200).send('Done!');
}

export default loginController;
