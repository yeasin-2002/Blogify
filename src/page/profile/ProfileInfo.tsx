import { Avatar } from "@/components";
import { useAuth } from "@/hooks";
import { profileResponse } from "@/types";
import { LogOut as LogOutIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import { UpdateUserInfo } from "./UpdateUserInfo";
import { UpdateProfileAvatar } from "./updateProfileAvatar";

interface Props extends React.ComponentProps<"div"> {
  User: profileResponse | undefined;
}

export const ProfileInfo = ({ User, ...rest }: Props) => {
  const auth = useAuth();
  const param = useParams();
  const isAuthUser = param.id === auth?.authUser?.id;
  return (
    <div className="flex flex-col  py-8 text-center" {...rest}>
      <div className="flex flex-col  items-center   gap-x-3 *:text-center  sm:flex-row sm:*:text-left">
        <div className="relative mb-8 h-[120px] max-h-[180px] w-[120px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
          <Avatar
            img={User?.avatar}
            name={User?.firstName}
            className="size-32"
          />
          <UpdateProfileAvatar id={User?.id} />
        </div>

        <div className="flex flex-1 justify-between">
          <div>
            <h3 className=" text-2xl font-semibold text-gray-900 lg:text-[28px]  dark:text-white">
              {User?.firstName + " " + User?.lastName}
            </h3>
            <p className="leading-[231%] lg:text-lg">{User?.email}</p>
          </div>
          {isAuthUser && (
            <div className="flex flex-col items-center gap-x-2 sm:flex-row">
              <UpdateUserInfo
                info={{
                  id: User?.id,
                  firstName: User?.firstName,
                  lastName: User?.lastName,
                  bio: User?.bio,
                }}
              />
              <button
                className="alternative-dark px-4 py-2.5"
                onClick={() => auth.logout()}
              >
                Logout
                <LogOutIcon className="size-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* bio */}
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          <p className="leading-[188%] text-gray-600 lg:text-lg dark:text-gray-400">
            {User?.bio}
          </p>
        </div>
      </div>
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
};
