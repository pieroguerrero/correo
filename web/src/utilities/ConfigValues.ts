/**
 * Provides configuration constant values for the application.
 */
const ConfigValues = Object.freeze({
  EmailListenerSocketURL: "http://localhost:9001",
  ListEmailsServiceApiURL: "http://localhost:9001/correo/receive",
  ReactQueryKeys: {
    InboxEmails: "inbox-emails",
  },
});

export default ConfigValues;
