import React, { useEffect, useContext } from 'react';
import Context from '../components/Context/Context';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router';
import getUserByToken from '../helperFuncs/getUserByToken';
export default function AboutUsPage() {
  const { user, setUser } = useContext(Context);

  useEffect(() => {
    if (!user)
      new Cookies().get('token')
        ? getUserByToken()
            .then((user) => setUser(user))
            .catch((e) => console.log(e.message))
        : history.replace('/');
  }, []);
  const history = useHistory();
  return (
    <>
      {user && (
        <div>
          <h1>עלינו</h1>
        </div>
      )}
    </>
  );
}
