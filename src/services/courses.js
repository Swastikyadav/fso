import axios from "axios";

const baseUrl = "http://localhost:3001/api/courses";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (newCourse) => {
  return axios.post(baseUrl, newCourse).then((response) => response.data);
};

const update = (id, updatedCourse) => {
  return axios
    .put(`${baseUrl}/${id}`, updatedCourse)
    .then((response) => response.data);
};

const deleteById = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
  deleteById,
};
