function userArrAdd(
  userArr: any,
  setEmail?: any,
  setName?: any,
  setAge?: any,
  setFamily?: any,
  setWork?: any,
  setPasvord?: any,
  setKey?: any,
) {
  userArr.forEach((element: any) => {
    if (setEmail !== undefined) {
      setEmail(element.email);
    }
    if (setPasvord !== undefined) {
      setPasvord(element.password);
    }
    if (setName !== undefined) {
      setName(element.name);
    }
    if (setAge !== undefined) {
      setAge(element.age);
    }
    if (setFamily !== undefined) {
      setFamily(element.family);
    }
    if (setWork !== undefined) {
      setWork(element.work);
    }
    if (setKey !== undefined) {
      setKey(element.key);
    }
  });
}

export { userArrAdd };
