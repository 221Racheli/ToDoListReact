import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API;

axios.interceptors.response.use(function (response) {
  console.log(`intercaption ${response.statusText}`);
  return response;
}, function (error) {
  console.log(`intercaption ${error}`)
  return Promise.reject(error);
});

export default {
  getTasks: async () => {
    const result = await axios.get('/task')
    return result.data;
  },

  addTask: async (name) => {
    console.log('addTask', name)
    const result = await axios.post('/task', { name: name, isComplete: "0" });
    return result.data;
  },

  setCompleted: async (id, name, isComplete) => {
    console.log('setCompleted', { id, name, isComplete });
    const result = await axios.put('/task', { id, name, isComplete: Number(isComplete) });
    return result.data;
  },

  deleteTask: async (id) => {
    console.log('deleteTask -', { id });
    await axios.delete(`/task/${id}`);
  }
};
