import axios from 'axios'


export async function signin ({ email, password })  {
    try {
      const response = await axios.post(
        'http://localhost:80/auth/user/signin',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          credentials: true
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Sign-in request failed.');
    }
  };

  export async function lawyersignin ({ email, password })  {
    try {
      const response = await axios.post(
        'http://localhost:80/auth/lawyer/signin',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          credentials: true
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Sign-in request failed.');
    }
  };