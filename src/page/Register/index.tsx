import { axiosInstance } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Input } from "@/components";
import { useAuth } from "@/hooks";
import { authData } from "@/types";

interface FormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const Register = ({ ...rest }: DivProps) => {
  const auth = useAuth();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationKey: ["register"],
    mutationFn: (body: FormValues): Promise<AxiosResponse> =>
      axiosInstance.post("/auth/register", body),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit = async (formValue: FormValues) => {
    try {
      const req = await mutateAsync(formValue);
      console.log("🚀 ~ onSubmit ~ req:", req);

      const data = req.data as authData;
      data.token && auth?.setAuthToken(data.token);
      data.user && auth?.setAuthUser(data.user);
      toast.success("Register successful");
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log("register Error", error);
        return toast.error(
          error.response?.data?.error || "Invalid user information",
        );
      }
      toast.error("something went wrong");
    }
  };
  return (
    <main {...rest}>
      <section className="container">
        <div className="mx-auto mt-12 w-full rounded-md bg-[#030317] p-8 md:w-1/2">
          <h2 className="mb-6 text-2xl font-bold">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register("firstName", {
                required: "First-Name is required",
              })}
              errorMsg={errors.firstName?.message}
              labelName="First Name"
              className="w-full rounded-md border border-white/20   bg-slate-200 p-3 text-black  focus:border-indigo-500 focus:outline-none"
            />

            <Input
              register={register("lastName", {
                required: "Last-Name is required",
              })}
              errorMsg={errors.lastName?.message}
              labelName="Last Name"
              className="w-full rounded-md border border-white/20   bg-slate-200 p-3 text-black  focus:border-indigo-500 focus:outline-none"
            />

            <Input
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email",
                },
              })}
              errorMsg={errors.email?.message}
              labelName="Email"
              className="w-full rounded-md border border-white/20   bg-slate-200 p-3 text-black  focus:border-indigo-500 focus:outline-none"
            />

            <Input
              register={register("password", {
                required: "password is required",
                minLength: { value: 8, message: "Minimum 8 characters" },
              })}
              errorMsg={errors.password?.message}
              labelName="Password"
              className="w-full rounded-md border border-white/20   bg-slate-200 p-3 text-black  focus:border-indigo-500 focus:outline-none"
            />
            <div className="mb-6">
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 p-3 text-white transition-all duration-200 hover:bg-indigo-700"
              >
                Create Account
              </button>
            </div>
            <p className="text-center">
              Already have account?{" "}
              <Link to="/login" className="text-indigo-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};
