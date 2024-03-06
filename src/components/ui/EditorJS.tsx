// import CheckList from "@editorjs/checklist";
import { createReactEditorJS } from "react-editor-js";

interface Props {
  defaultValue?: string;
}

export const EditorJS = ({ defaultValue = "" }: Props) => {
  const ReactEditorJS = createReactEditorJS();
  return (
    <ReactEditorJS
      defaultBlock={defaultValue}
      // tools={{ checkList: CheckList }}
    />
  );
};
