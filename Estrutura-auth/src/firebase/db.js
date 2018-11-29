import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`guiacarapp/usuario/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('guiacarapp/usuario').once('value');