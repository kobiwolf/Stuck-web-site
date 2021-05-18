import './HeadOfPage.css';
import React from 'react';
import Logo from '../Logo/Logo';
import User from '../UserHead/User';

export default function HeadOfPage() {
  return (
    <div className="head">
      <Logo />
      <User />
    </div>
  );
}
