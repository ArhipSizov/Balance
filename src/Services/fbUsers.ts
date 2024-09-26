import { database } from "./store/index"

export const addUserDB = (userData: any) => {
    const ref = database.ref("users").push();
    const newKey = ref.key;
    const dataWithKey = {
      email: userData.email,
      password: userData.password,
    };
    ref.set(dataWithKey);
    userDB(newKey);
  }

  async function userDB(newKey: any) {
    const onjectUser = {
      key: newKey,
    };
    let json = JSON.stringify(onjectUser);
  }