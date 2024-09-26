function userArrAdd(
  userArr: any,
  setEmail?: any,
  setPasvord?: any,
) {
  userArr.forEach((element: any) => {
    if (setEmail !== undefined) {
      setEmail(element.email);
    }
    if (setPasvord !== undefined) {
      setPasvord(element.password);
    }
  });
}

export { userArrAdd };
