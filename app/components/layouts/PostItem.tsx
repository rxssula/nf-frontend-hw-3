import Image from "next/image";
import * as React from "react";
import Tag from "../Tag";
import Link from "next/link";

export interface PostItemProps {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

const PostItem: React.FC<PostItemProps> = ({ id, title, body, tags }) => {
  return (
    <div className="pb-9 border-b-[1px] gap-[100px] flex flex-row">
      <div className="flex flex-col gap-[70px]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-row items-center">
            <Image
              className="rounded-full w-6 h-6 mr-1"
              src="/images/woman.png"
              width={24}
              height={24}
              alt="woman"
            />
            <p className="text-[14px]">Author's name in Topics Name · 7 july</p>
          </div>
          <div className="flex flex-col gap-6">
            <Link href={`/showPost/${id}`}>
              <h1 className="text-[28px] font-[700]">{title}</h1>
            </Link>
            <p className="text-[16px]">{body}</p>
          </div>
        </div>
        <div className="flex flex-row">
          {tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
      </div>
      {/* <Image
        className="rounded-md w-[265px] h-[265px]"
        src="/images/laptop.png"
        width={265}
        height={265}
        alt="laptop"
      /> */}
    </div>
  );
};

export default PostItem;
