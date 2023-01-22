let token = null;

const STORAGE_KEY = "loggedDermaAIUser";

const setUser = (user) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  token = user.token;
};

const getUser = () => {
  const loggedUserJSON = localStorage.getItem(STORAGE_KEY);

  if (!loggedUserJSON) {
    return null;
  }

  const user = JSON.parse(loggedUserJSON);
  token = user.token;
  return user;
};

const clearUser = () => {
  // localStorage.clear();
  localStorage.removeItem(STORAGE_KEY);
  token = null;
};

const getToken = () => token;

const exportedObject = {
  setUser,
  clearUser,
  getUser,
  getToken,
};

export default exportedObject;
