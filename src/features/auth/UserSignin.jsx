import React from "react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signin } from "../../services/authApi";
import { useNavigate } from 'react-router-dom';
import  {useSelector,useDispatch} from 'react-redux'
import { updateName } from "./userSlice";
import { updateRole ,updateId} from "./userSlice";
import { updatemail} from "./userSlice";
 

function UserSignin(){

  const navigate = useNavigate();
  const dispatch = useDispatch()

 const mutation = useMutation(signin);

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    mutation.mutate(
      { email: credentials.email, password: credentials.password },
      {
        onSuccess: (data) => {
          console.log(data);
         dispatch(updateName(data.user.name))
         dispatch(updateRole(data.user.role))
         dispatch(updateId(data.user._id))
          navigate('/call');
        },
      }
    );
  };
  
  return (
    
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    
  );
}

export {UserSignin}