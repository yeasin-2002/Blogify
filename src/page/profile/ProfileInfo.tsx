import { Avatar } from '@/components';
import { useAuth } from '@/hooks';
import { profileResponse } from '@/types';
import { LogOut as LogOutIcon } from 'lucide-react';
import { UpdateUserInfo } from './UpdateUserInfo';
import { UpdateProfileAvatar } from './updateProfileAvatar';

interface Props extends React.ComponentProps<'div'> {
  authUser: profileResponse | undefined;
}

export const ProfileInfo = ({ authUser, ...rest }: Props) => {
  const { logout } = useAuth();
  return (
    <div className="flex flex-col  py-8 text-center" {...rest}>
      <div className="flex flex-col  items-center   gap-x-3 *:text-center  sm:flex-row sm:*:text-left">
        <div className="relative mb-8 h-[120px] max-h-[180px] w-[120px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
          <Avatar
            img={authUser?.avatar}
            name={authUser?.firstName}
            className="size-32"
          />
          <UpdateProfileAvatar id={authUser?.id} />
        </div>

        <div className="flex flex-1 justify-between">
          <div>
            <h3 className=" text-2xl font-semibold text-white lg:text-[28px]">
              {authUser?.firstName + ' ' + authUser?.lastName}
            </h3>
            <p className="leading-[231%] lg:text-lg">{authUser?.email}</p>
          </div>
          <div className="flex flex-col items-center gap-x-2 sm:flex-row">
            <UpdateUserInfo
              info={{
                id: authUser?.id,
                firstName: authUser?.firstName,
                lastName: authUser?.lastName,
                bio: authUser?.bio,
              }}
            />
            <button
              className="alternative-dark px-4 py-2.5"
              onClick={() => logout()}
            >
              Logout
              <LogOutIcon className="size-6" />
            </button>
          </div>
        </div>
      </div>

      {/* bio */}
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {authUser?.bio}
          </p>
        </div>
      </div>
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
};
