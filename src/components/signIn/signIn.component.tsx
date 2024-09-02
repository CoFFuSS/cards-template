import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from '@/store/slices/userSlice';
import { useGetUserByUsernameQuery } from '@/store/slices/userApi';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: users, error } = useGetUserByUsernameQuery(username, {
    skip: !username,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (users && users.length > 0) {
      dispatch(setUser(users[0]));
      navigate('/');
    } else {
      alert('User not found!');
    }
  };

  if (error) {
    return <h1>{JSON.stringify(error)}</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default SignIn;
