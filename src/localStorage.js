const localStorageMethod = (() => {
  const setPlayer = (key, player) => {
    localStorage.setItem(key, JSON.stringify(player));
  };

  return { setPlayer };
})();

export default localStorageMethod;