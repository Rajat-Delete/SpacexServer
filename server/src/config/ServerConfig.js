const dotenv = require('dotenv');

dotenv.config(); //this command will load all the data from .env file into process.env

module.exports = {
    PORT : process.env.PORT,
}

