// import Cookies from 'cookies';
import { verify } from 'jsonwebtoken';
import User from '../../models/userModel';
import connetDB from '../../utils/dbConnect';
import singToken from '../../utils/token';

async function authLogin(req, res) {
  connetDB();

  if (req.method !== 'GET') {
    return res.status(306).send('onl GET request is allowed only');
  }

  let token;
  let refresh;

  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }
  console.log(req.body);

  if (req.cookies && req.cookies.refreshToken) {
    refresh = req.cookies.refreshToken;
  }

  if (!token && !refresh) {
    console.log('no token');
    return res.status(401).json({
      success: false,
      message: 'Please log in to get access.',
    });
  }

  if (token) {
    try {
      // Verify token
      const decoded = verify(req.cookies.token, process.env.JWT_SECRET);

      // Check if user still exists
      const currentUser = await User.findById(decoded.id);

      if (!currentUser) {
        return res.status(401).json({ success: false, data: null });
      }

      // There is a logged in user
      return res.status(200).json({ user: currentUser });
    } catch (error) {
      return res.status(401).json({ success: false, data: null });
    }
  }
}

export default authLogin;
