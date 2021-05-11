import Cookies from 'universal-cookie';
export default {
  headers: { Authorization: new Cookies().get('token') },
};
