import axios from "axios";
import { toast } from "sonner";

export const handleError = (error: unknown) => {
  console.error(error);
  toast.error("Something went wrong");
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API || "http://localhost:4000",
  timeout: 5000,
});

export const sendWaitlistEmail = async (email: string) => {
  try {
    const response = await api.post("/waitlist", {
      email: email,
    });
    toast.success("Email added to waitlist");
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
