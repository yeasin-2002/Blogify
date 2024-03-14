import editIcon from "@/assets/icons/edit.svg";
import fileIcon from "@/assets/icons/file.svg";
import {
  Draggable,
  Popover,
  PopoverContent,
  PopoverTrigger,
  UploadingLoop,
} from "@/components";
import { useAuth, useAxios } from "@/hooks";
import { cn } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ImageUp } from "lucide-react";

import { useState } from "react";
import { toast } from "react-toastify";
const fileTypes = ["JPG", "PNG", "JPEG"];

export const UpdateProfileAvatar = ({ ...rest }) => {
  const api = useAxios();
  const queryClient = useQueryClient();
  const auth = useAuth();

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const { isPending } = useMutation({
    mutationKey: ["updateProfileAvatar"],
    mutationFn: (body) =>
      api.post("/profile/avatar", body, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", file);
      const req = await api.post("/profile/avatar", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (req.status === 200) {
        auth.setAuthUser((pre) => {
          toast.success("Avatar updated successfully");
          if (pre) {
            const user = pre;
            return { ...user, avatar: req.data.user.avatar };
          }
          return pre;
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error?.response?.data?.error ||
            "Something went wrong, try again later",
        );
      }
    }
  };

  return (
    <div {...rest}>
      <Popover title="Upload Avatar" className="bg-slate-200 ">
        <PopoverTrigger className="absolute bottom-0 right-0 grid h-7 w-7 place-items-center rounded-full bg-slate-700 hover:bg-slate-700/80">
          <img src={editIcon} alt="Edit" />
        </PopoverTrigger>
        <PopoverContent>
          {!file ? (
            <Draggable
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            >
              <div className="mt-10 grid  place-items-center     gap-y-5 ">
                <img src={fileIcon} alt="File" className=" size-20 " />
                <p className="text-center  text-gray-600">
                  Click or Drag your image here
                </p>
                <p className="text-center text-gray-400">
                  Supported Image Formate :
                  <br />
                  {fileTypes.map((type, i) => (
                    <span key={type + i} className="mx-1">
                      {type}
                    </span>
                  ))}
                </p>
              </div>
            </Draggable>
          ) : (
            <div className="flex flex-col items-center gap-y-4">
              <img
                src={URL.createObjectURL(file)}
                alt="Avatar"
                className="size-64 rounded-md object-cover shadow-md"
              />

              <div className="mt-4 flex gap-x-2">
                <button
                  type="button"
                  className="alternative-dark flex-1 px-4"
                  onClick={handleUpload}
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <UploadingLoop />
                      <span className="ml-2">Uploading...</span>
                    </>
                  ) : (
                    <>
                      <ImageUp className="size-5" />
                      Upload New Avatar
                    </>
                  )}
                </button>
                <button
                  type="button"
                  disabled={isPending}
                  className={cn("alternative", {
                    "cursor-not-allowed": isPending,
                  })}
                  onClick={() => setFile(null)}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};
