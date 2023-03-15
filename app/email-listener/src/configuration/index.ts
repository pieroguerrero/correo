export const EnvConfigFile = {
  dbConnectionString: {
    name: 'DB_CONNECTION_STRING',
    /**
     * This value is available only during the runtime of the application
     */
    getValue() {
      return process.env.DB_CONNECTION_STRING;
    },
  },
  restApiPort: {
    name: 'REST_API_PORT',
    /**
     * This value is available only during the runtime of the application
     */
    getValue() {
      return process.env.REST_API_PORT;
    },
  },
  webSocketServicePort: {
    name: 'WEB_SOCKET_PORT',
    getValue() {
      return process.env.WEB_SOCKET_PORT;
    },
  },
  serviceURL: {
    name: 'SERVICE_URL_PATH',
    getValue() {
      return 'correo/receive';
    },
  },
};
