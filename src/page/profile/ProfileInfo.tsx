import editIcon from '@/assets/icons/edit.svg';
import { Avatar } from '@/components';
import { profileResponse } from '@/types';
import { UpdateProfileAvatar } from './updateProfileAvatar';

interface Props extends React.ComponentProps<'div'> {
  authUser: profileResponse | undefined;
}

export const ProfileInfo = ({ authUser, ...rest }: Props) => {
  return (
    <div className="flex flex-col items-center py-8 text-center" {...rest}>
      <div className="relative mb-8 h-[120px] max-h-[180px] w-[120px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
        <Avatar
          img={authUser?.avatar}
          name={authUser?.firstName}
          className="size-32"
        />
        <UpdateProfileAvatar />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {authUser?.firstName + ' ' + authUser?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg">{authUser?.email}</p>
      </div>

      {/* bio */}
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {authUser?.bio}
          </p>
        </div>

        <button className="flex-center h-7 w-7 rounded-full">
          <img src={editIcon} alt="Edit" />
        </button>
      </div>
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
};
