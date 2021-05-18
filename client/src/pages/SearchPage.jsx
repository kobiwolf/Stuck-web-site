/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import SearchDiv from '../components/SearchDiv/SearchDiv';
import Context from '../components/Context/Context';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router';
import getUserByToken from '../helperFuncs/getUserByToken';

export default function SearchPage() {
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
          <div className="tabHeader">חיפוש מוצר באזורך:</div>
          <SearchDiv />
        </div>
      )}
    </>
  );
}
