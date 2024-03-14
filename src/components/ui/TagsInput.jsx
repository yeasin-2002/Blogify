import { useEffect, useState } from "react";
import { CrossRound } from "../icons";


export const TagsInput = (props) => {
  const [tags, setTags] = useState(
    props?.initialtags?.split(",") || [],
  );
  const [inputValue, setInputValue] = useState("");

  const handleCommaSeparatedTags = (e) => {
    if (e.code === "Enter") {
      e.preventDefault();

      if (inputValue !== "") {
        const newTags = [...tags, inputValue];
        setTags(newTags);
        setInputValue("");
      }
    }
  };

  const removeTags = (indexToRemove) => {
    setTags((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  useEffect(() => {
    props.onSave(tags.join(","));
  }, [tags, inputValue, props.initialtags, props]);

  return (
    <div className="my-2 flex flex-col gap-y-1  rounded-md p-2 ring-1">
      <label className="text-gray-900 dark:text-gray-100">Tags</label>

      <div className="flex h-full w-full flex-wrap overflow-auto">
        {tags.map((tag, index) => (
          <p
            key={tag}
            className="m-1 flex h-full  items-center rounded-md bg-gray-200 p-1 text-gray-900 "
          >
            {tag}
            <CrossRound
              className="ml-1 h-4 w-4 cursor-pointer  "
              onClick={() => removeTags(index)}
            />
          </p>
        ))}
      </div>
      <input
        {...props}
        type="text"
        className="input-flow w-full rounded-md p-2  "
        placeholder="Press Enter to add tags"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleCommaSeparatedTags}
      />
    </div>
  );
};
