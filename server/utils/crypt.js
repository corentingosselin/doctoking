const bcrypt = require('bcryptjs');

const hash = async function(password) {
  const salt = await bcrypt.genSalt(10);
  const passwprdHash = await bcrypt.hash(password, salt);  
  return passwprdHash;
}
module.exports = {hash}

