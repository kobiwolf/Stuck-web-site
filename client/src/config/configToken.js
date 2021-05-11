import Cookies from 'universal-cookie';
const config = {
  headers: { Authorization: new Cookies().get('token') },
};
export default config;
