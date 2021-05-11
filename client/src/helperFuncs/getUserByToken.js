import axios from 'axios';
import Cookies from 'universal-cookie';
import endPoint from '../endPoints/serverEndPoint';
import config from '../config/configToken';
const getUserByToken = async () => {
  try {
    const { data } = await axios.post(`${endPoint}/profile`, {}, config);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
export default getUserByToken;
