import Cookies from 'universal-cookie';

const config = () => {
  return { headers: { Authorization: new Cookies().get('token') } };
};

export default config;
