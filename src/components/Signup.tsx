import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { BASE_URL } from "../constants";

const signupSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  profession: z.string().nonempty({ message: "Profession is required" }),
});

type SignupFormData = z.infer<typeof signupSchema>;

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      const response = await axios.post(`${BASE_URL}register`, data);
      alert(response.data.message);
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <div className="form-group">
        <label>Name</label>
        <input type="text" {...register("name")} />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="text" {...register("email")} />
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

      <div className="form-group">
        <label>Phone</label>
        <input type="text" {...register("phone")} />
        {errors.phone && (
          <p className="error-message">{errors.phone.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Profession</label>
        <select {...register("profession")}>
          <option value="">Select Profession</option>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Teacher">Teacher</option>
        </select>
        {errors.profession && (
          <p className="error-message">{errors.profession.message}</p>
        )}
      </div>

      <button type="submit" className="submit-btn">
        Register
      </button>
    </form>
  );
};

export default Signup;
