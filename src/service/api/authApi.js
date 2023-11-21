import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://water-tracker-pce2.onrender.com/',
});

export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = ` Bearer ${token}`;
  localStorage.setItem('token', token);
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
  localStorage.removeItem('token');
};

const removeToken = () => {
  delete instance.defaults.headers.common['Authorization'];
  localStorage.removeItem('token');
};

export const signin = async body => {
  const { data } = await instance.post('api/auth/signin', body);
  setAuthHeader(data.token);
  console.log(data);
  return data;
};

export const signup = async body => {
  const { data } = await instance.post('api/auth/signup', body);
  setAuthHeader(data.token);
  console.log(data);
  return data;
};

export const signout = async () => {
  await instance.post('/signout');
  removeToken();
};

export const refreshUser = async token => {
  setAuthHeader(token);

  const { data } = await instance.get('api/auth/current');
  console.log(data);
  return data;
};

export const resetPassword = async (resetToken, newPassword) => {
  const { data } = await instance.post(`/resetPassword/${resetToken}`, {
    newPassword,
  });
  setAuthHeader(data.token);
  return data;
};

export const updateAvatar = async (newPhotoFile, token) => {
  setAuthHeader(token);
  const data = await instance.patch('api/auth/avatars', newPhotoFile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data.data.avatar;
};

export const updateUser = async (updatedUser, token, id) => {
  setAuthHeader(token);
  if (updatedUser.hasOwnProperty('id')) {
    delete updatedUser.id;
  }
  const data = await instance.patch(`api/auth/${id}`, updatedUser);

  console.log(data);
  return data;
};
// export const updateAvatar = async PhotoFile => {};
