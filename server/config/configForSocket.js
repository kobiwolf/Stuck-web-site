const client =
  process.env.NODE_ENV === 'production'
    ? 'https://stuck-by-kobi-wolf.herokuapp.com'
    : 'http://localhost:3000';

const config = {
  cors: {
    origin: client,
    methods: ['GET', 'POST'],
  },
};
module.exports = config;
