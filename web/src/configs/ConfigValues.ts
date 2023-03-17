/**
 * Provides configuration constant values for the application.
 */
const ConfigValues = Object.freeze({
  EmailListenerSocketURL: "http://localhost:9001",
  ListInboxEmailsServiceApiURL: "http://localhost:9002/correo/list/inbox",
  ReactQueryKeys: {
    InboxEmails: "inbox-emails",
  },
});

export default ConfigValues;
