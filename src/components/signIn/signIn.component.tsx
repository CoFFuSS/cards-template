import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { setUser } from '@/store/slices/userSlice';
import { useGetUserByUsernameQuery } from '@/services/api/userApi';

import styles from './signIn.module.scss';

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
      toast.success('Login successful!');
      navigate('/');
    } else {
      toast.error('User not found!');
    }
  };

  if (error) {
    toast.error('Oops... Something went wrong');
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
