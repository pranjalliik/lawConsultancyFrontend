import axios from 'axios'


export async function crreateCall ({lawyer,client})  {
    try {
      const response = await axios.post(
        'http://localhost:80/call',
        JSON.stringify({ lawyer, client }),
        {
          headers: { 'Content-Type': 'application/json' },
          credentials: true
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('cannot start call');
    }
  };

  export async function sendMsg ({sender,message})  {
    try {
      const response = await axios.post(
        'http://localhost:80/chat/652bb01df5b74b6f83bf0b97',
        JSON.stringify({ sender, message }),
        {
          headers: { 'Content-Type': 'application/json' },
          credentials: true
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('cannot send msg');
    }
  };

  export async function getMsg ()  {
    try {
      const response = await axios.get('http://localhost:80/chat/652bb01df5b74b6f83bf0b97')

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('cannot send msg');
    }
  };