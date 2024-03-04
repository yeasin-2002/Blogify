import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Input } from '@/components';
import { useAuth } from '@/hooks';
import { authData } from '@/types';
import { axiosInstance } from '@/utils';

interface FormValues {
  email: string;
  password: string;
}

export const LogIn = ({ ...rest }: DivProps) => {
  const navigate = useNavigate();
  const { setAuthToken, setAuthUser } = useAuth();

  const { mutateAsync } = useMutation({
    mutationKey: ['login'],
    mutationFn: (body: FormValues): Promise<AxiosResponse> =>
      axiosInstance.post('/auth/login', body),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const req = await mutateAsync(data);
      if (req.status !== 200) return toast.error('something went wrong');
      const returnedData = req.data as authData;
      returnedData.token && setAuthToken(returnedData.token);
      returnedData.user && setAuthUser(returnedData.user);
      toast.success('Login successful');
      navigate('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log('form error', error);
        return toast.error(
          error.response?.data?.error || 'Invalid email or password',
        );
      }
      toast.error('something went wrong');
    }
  };

  return (
    <main {...rest}>
      <section className="container">
        <div className="mx-auto mt-12 w-full rounded-md bg-[#030317] p-8 md:w-1/2">
          <h2 className="mb-6 text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email',
                },
              })}
              errorMsg={errors.email?.message}
              labelName="Email"
            />
            <Input
              register={register('password', {
                required: 'password is required',
                minLength: {
                  value: 8,
                  message: 'password should be  Minimum 8 characters',
                },
              })}
              errorMsg={errors.password?.message}
              labelName="Password"
            />
            <div className="mb-6">
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 p-3 text-white transition-all duration-200 hover:bg-indigo-700"
              >
                Login
              </button>
            </div>
            <p className="text-center">
              Don't have an account?{' '}
              <Link to="/register" className="text-indigo-600 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};
