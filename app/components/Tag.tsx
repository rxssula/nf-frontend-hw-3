import * as React from "react";

interface ITagProps {
  tag: string;
}

const Tag: React.FunctionComponent<ITagProps> = ({ tag }) => {
  return (
    <div className="bg-[#cfcfd36a] px-4 py-[6px] rounded-full text-[#081E34] mr-2">
      {tag}
    </div>
  );
};

export default Tag;
