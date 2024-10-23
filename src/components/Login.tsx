// src/components/Login.tsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { AuthContext } from "../App";
import { BASE_URL } from "../constants";

// Zod schema for login validation
const loginSchema = z.object({
  email: z.string().min(1, "Name is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { setIsauthenticated } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post(`${BASE_URL}login`, data, {
        withCredentials: true,
      });
      if (response.data.success) {
        document.cookie = "isLoggedIn=true; path=/; max-age=3600";
        setIsauthenticated(true);
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Login failed!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <div className="form-group">
        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}
      </div>

      <button type="submit" className="submit-btn">
        Log In
      </button>
    </form>
  );
};

export default Login;
