import Image from "next/image";
import * as React from "react";

export interface PostItemProps {}

export function PostItem(props: PostItemProps) {
  return (
    <div className="pb-9 border-b-[1px] gap-[100px] flex flex-row">
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
          <h1 className="text-[28px] font-[700]">7 Practical CSS Tips</h1>
          <p className="text-[16px]">
            You not only learn more Python by implementing what you already know
            but, in the end, you can see how all your hard work pays off.
          </p>
        </div>
      </div>
      <Image
        className="rounded-md w-[265px] h-[265px]"
        src="/images/laptop.png"
        width={265}
        height={265}
        alt="laptop"
      />
    </div>
  );
}
