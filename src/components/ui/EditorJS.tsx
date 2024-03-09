import { Editor } from "novel";
import { useState } from "react";

export const NovelEditor = () => {
  const [content, setContent] = useState("");

  return (
    <Editor
      className="rounded-md border  border-white       bg-githubDark  "
      onUpdate={(data) => {
        const json = data?.getJSON();
        console.log("🚀 ~ NovelEditor ~ json:", json);
        const html = data?.getHTML() || "";
        setContent(html);
      }}
    ></Editor>
  );
};
