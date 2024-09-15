import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchFAQs = async () => {
  const response = await axios.get(`${API_URL}/faqs`);
  return response.data;
};
