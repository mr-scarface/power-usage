const hash = {
  SALT: 'e-commerce-app-salt',
  ITERATIONS: 2000,
  KEY_LEN: 64,
  DIGEST: 'sha512',
};

const tokenExpiration = 60 * 5;

module.exports = { hash, tokenExpiration };
