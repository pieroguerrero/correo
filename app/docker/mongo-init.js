// @ts-nocheck

//Create main admin user
db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [
    {
      role: "readWrite",
      db: "correodb",
    },
  ],
});

//Create user for the Email Listener service
db.createUser({
  user: "emaillistener",
  pwd: "emaillistener",
  roles: [
    {
      role: "readWrite",
      db: "correodb",
    },
  ],
});

//Create user for the List Emails service
db.createUser({
  user: "listemails",
  pwd: "listemails",
  roles: [
    {
      role: "read",
      db: "correodb",
    },
  ],
});
