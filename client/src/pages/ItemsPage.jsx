/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import AddItemsDiv from '../components/AddItemsDiv/AddItemsDiv';
import ItemsDiv from '../components/ItemsDiv/ItemsDiv';
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
          <ItemsDiv />
          <div className="tabHeader">המוצרים להוספה:</div>
          <AddItemsDiv />
        </div>
      )}
    </>
  );
}
