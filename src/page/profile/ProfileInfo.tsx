import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

// assets
import editIcon from '@/assets/icons/edit.svg';
import { Avatar } from '@/components';
import { useAuth } from '@/hooks';

export const ProfileInfo = ({ ...rest }: Props) => {
  const { authUser } = useAuth();
  return (
    <div className="flex flex-col items-center py-8 text-center" {...rest}>
      <div className="relative mb-8 h-[120px] max-h-[180px] w-[120px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
        <Avatar
          img={authUser?.avatar}
          firstName={authUser?.firstName}
          className="size-32"
        />

        <button className="absolute bottom-0 right-0 grid h-7 w-7 place-items-center rounded-full bg-slate-700 hover:bg-slate-700/80">
          <img src={editIcon} alt="Edit" />
        </button>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {authUser?.firstName + ' ' + authUser?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg">{authUser?.bio}</p>
      </div>

      {/* bio */}
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            Sumit is an entrepreneurial visionary known for his exceptional
            performance and passion for technology and business. He established
            Analyzen in 2008 while he was a student at Bangladesh University of
            Engineering & Technology (BUET). Analyzen has since become a
            top-tier Web and Mobile Application Development firm and the first
            Digital and Social Media Marketing Agency in Bangladesh.
          </p>
        </div>
        {/* Edit Bio button. The Above bio will be editable when clicking on the button */}
        <button className="flex-center h-7 w-7 rounded-full">
          <img src={editIcon} alt="Edit" />
        </button>
      </div>
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
};
