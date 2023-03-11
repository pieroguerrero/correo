// @ts-ignore
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
