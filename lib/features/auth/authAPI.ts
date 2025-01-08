import { BASE_URL } from "@/config/config";
import axios from "axios";

export const login = async (email: string, password: string, loginAgent: string, deviceId: string) => {
  const response = await axios.post(
    `${BASE_URL}/auth/v1/login`, 
    { email, password, loginAgent, deviceId },
    {
      headers: {
        "Content-Type": "application/json",  // Ensures the server knows you're sending JSON
      },
      withCredentials: true,  // Sends cookies along with the request
    }
  );

  return response;
};


export const fetchUserApi = async () => {
  const response = await axios.get(
    `${BASE_URL}/auth/v1/me`, 
    {
      headers: {
        "Content-Type": "application/json",  // Ensures the server knows you're sending JSON
      },
      withCredentials: true,  // Sends cookies along with the request
    }
  );

  return response;
};
