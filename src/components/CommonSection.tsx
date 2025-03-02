import React from "react";
import CustomImage from "./CustomImage";

interface Props {
  title: string;
}

const CommonSection = (props: Props) => {
  const { title } = props;
  return (
    <section className="!mx-3 !px-4 bg-white rounded-lg">
      <div className="flex items-center justify-between">
        <p className="text-[#101828] font-bold text-base">{title}</p>
        <CustomImage
          src="/assets/svgs/3DotsH.svg"
          alt="3 dots horizontal"
          className="w-3"
        />
      </div>
    </section>
  );
};

export default CommonSection;
