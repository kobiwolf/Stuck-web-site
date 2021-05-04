let endPoint;
if (process.env.PORT) endPoint = '/';
else endPoint = `http://localhost:3001`;
export default endPoint;
