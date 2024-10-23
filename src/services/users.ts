import axios from "axios";
import { BASE_URL } from "../constants";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export const getAllUsers = async () => {
  const res = await axios.get(`${BASE_URL}getAllUsers`, {
    withCredentials: true,
  });

  return res.data.users;
};

export const deleteUser = async (id: string) => {
  const res = await axios.delete(`${BASE_URL}users/${id}`, {
    withCredentials: true,
  });

  return res.data;
};

export const updateUser = async (id: string, data: Record<string, string>) => {
  const res = await axios.put(`${BASE_URL}users/${id}`, data, {
    withCredentials: true,
  });

  return res.data;
};

export const logout = async () => {
  const res = await axios.delete(`${BASE_URL}logout`, {
    withCredentials: true,
  });
  return res.data;
};
