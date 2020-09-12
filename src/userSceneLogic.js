const userSceneLogic = (() => {
  const moreThanFourChars = (value) => {
    const pattern = /^\w{4,}$/;
    return pattern.test(value);
  };

  return { moreThanFourChars };
})();

export default userSceneLogic;