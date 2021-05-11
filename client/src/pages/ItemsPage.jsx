import React, { useEffect, useContext } from 'react';
import HeadOfPage from '../components/headOfPage/HeadOfPage';
import Context from '../components/Context/Context';
import Cookies from 'universal-cookie';

import { useHistory } from 'react-router';
import getUserByToken from '../helperFuncs/getUserByToken';
export default function ItemsPage() {
  const { user, setUser } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (!user)
      new Cookies().get('token')
        ? getUserByToken()
            .then((user) => setUser(user))
            .catch((e) => console.log(e.message))
        : history.replace('/');
  }, []);
  return (
    <>
      {user && (
        <div>
          <HeadOfPage />
          <h1>מוצרים</h1>
        </div>
      )}
    </>
  );
}
