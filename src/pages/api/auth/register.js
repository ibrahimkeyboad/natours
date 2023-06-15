import User from '@/models/userModel';
import { hash } from 'bcryptjs';

import validator from 'validator';

export default async function handler(req, res) {
  const { body, method } = req;

  if (!method === 'POST') {
    return res.status(401).json({ error: 'Only Post request is allowed!' });
  }

  connetDB();
  try {
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return res.status(403).json({ error: 'Invalid data' });
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid crendential' },
        { status: 422 }
      );
    }

    const exist = await User.findOne({ email: email.trim() });

    if (exist) {
      return NextResponse.json(
        { error: 'User already exist' },
        {
          status: 403,
        }
      );
    }

    const newPassword = await hash(password.trim(), 12);

    await User.create({
      email: email.trim().toLowerCase(),
      name: name.trim(),
      password: newPassword,
    });

    return res.status(201).json({ msg: 'Imeisha iyo😎' });
  } catch (error) {
    console.log('API error', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
