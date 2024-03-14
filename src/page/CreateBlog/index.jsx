import { BlogForm } from "@/components/actions/BlogForm";
import { useAxios } from "@/hooks";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const CreateBlog = ({ ...rest }) => {
  const api = useAxios();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationKey: ["createBlog"],
    mutationFn: async (body) =>
      api.post("/blogs", body, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
  });

  const onSubmit = async (data) => {
    try {
      const req = await mutateAsync(data);

      if (req.status === 201) {
        toast.success("Blog created successfully");
        navigate(`/blog/${req?.data?.blog?.id}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to create blog");
    }
  };
  return (
    <div {...rest}>
      <BlogForm onSave={onSubmit} />
    </div>
  );
};
