import React, { useEffect, useContext } from 'react';
import SearchDiv from '../components/SearchDiv/SearchDiv';
import Context from '../components/Context/Context';
import Cookies from 'universal-cookie';
import endPoint from '../endPoints/serverEndPoint';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function SearchPage() {
  const { user, setUser } = useContext(Context);
  const history = useHistory();
  const config = {
    headers: { Authorization: new Cookies().get('token') },
  };
  const getUserByToken = async () => {
    const { data } = await axios.post(`${endPoint}/profile`, {}, config);
    console.log(data);
    setUser(data);
  };
  useEffect(() => {
    if (!user)
      new Cookies().get('token')
        ? getUserByToken()
        : history.replace('/signup');
  }, []);

  return (
    <>
      {user && (
        <div>
          <SearchDiv />
        </div>
      )}
    </>
  );
}
