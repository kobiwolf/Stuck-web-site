import React from 'react';

export default function Card({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <h2>{user.address.city}</h2>
      <a href={`mailto:${user.email}`}>שלח לי מייל</a>
    </div>
  );
}
