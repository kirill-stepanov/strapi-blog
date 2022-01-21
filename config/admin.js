module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3fde2e88ccfa23571b08c6799abcdf25'),
  },
});
