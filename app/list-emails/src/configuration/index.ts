/**
 * Provides the configurarion information present in the .env file.
 * Every item in this object provides (1) The name of the .env proproty is retrieving and (2) A method to retrieve the property at runtime.
 */
export const EnvConfigFile = {
  dbConnectionString: {
    name: 'DB_CONNECTION_STRING',
    getValue() {
      return process.env.DB_CONNECTION_STRING;
    },
  },
  restApiPort: {
    name: 'REST_API_PORT',
    getValue() {
      return process.env.REST_API_PORT;
    },
  },
  serviceURL: {
    name: 'SERVICE_URL_PATH',
    getValue() {
      return 'correo/list';
    },
  },
};
