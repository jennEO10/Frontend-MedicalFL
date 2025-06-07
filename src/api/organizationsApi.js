import axios from 'axios';

const API_URL = 'https://graphic-brook-404722.uc.r.appspot.com';

export const getOrganizations = async () => {
  const response = await axios.get(`${API_URL}/api/listar-organizaciones`);
  return response.data;
};

export const createOrganization = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updateOrganization = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteOrganization = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};