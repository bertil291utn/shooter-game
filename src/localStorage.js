const localStorageMethod = (() => {
  const getLocalStorageVariable = () => localStorage.getItem('shooterGame');
  const
  const setUserName = (userName) => {
    if (localStorage.getItem('shooterGame') !== null) return;
    localStorage.setItem('shooterGame', JSON.stringify(value))
  }

  return { setUserName }
})()

export default localStorageMethod;