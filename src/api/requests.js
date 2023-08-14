import apiClient from './api';

export async function loadUsers() {
  const users = [];

  try {
    const responseData = (await apiClient.get('/users.json')).data;
    console.log('Data: ', responseData);

    for (const key in responseData) {
      users.push({
        id: key,
        ...responseData[key],
      })
    }

    return users;
  } catch (error) {
    return [];
  }
}
