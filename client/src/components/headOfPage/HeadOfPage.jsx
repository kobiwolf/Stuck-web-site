import './HeadOfPage.css';
import React, { useContext } from 'react';
import Logo from '../Logo/Logo';
import User from '../UserHead/User';
import Context from '../Context/Context';

export default function HeadOfPage() {
  const { user, setUser } = useContext(Context);
  console.log(user);
  return (
    <div className="head">
      <div />
      <Logo />
      <User name={user.name} img={user.avatar} />
    </div>
  );
}
