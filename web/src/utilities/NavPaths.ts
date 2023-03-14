/**
 * Provides the routes catalog for the application
 */
const NavPaths = Object.freeze({
  Unknown: { path: "*", name: "Unkwnow page" },
  Base: { path: "/", name: "Account" },
  DefaultAfteLogin: { path: "/inbox", name: "After Login" },
  Mail: { path: "mail", name: "Mail" },
  Root: { path: "/", name: "Root" },
  Inbox: { path: "inbox", name: "Inbox" },
  Sent: { path: "sent", name: "Sent" },
  Trash: { path: "trash", name: "Trash" },
  Soon: { path: "coming-soon", name: "Coming Soon" },
  Login: { path: "login", name: "Login" },
});

export default NavPaths;
