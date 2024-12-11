import { database } from "./store/index"

export const addUserDB = (userData: any) => {
    const ref = database.ref("users").push();
    const newKey = ref.key;
    const dataWithKey = {
      key: newKey,
      email: userData.email,
      password: userData.password,
      name: "",
      age: "",
      family: "",
      work: ""
    };
    ref.set(dataWithKey);
  }