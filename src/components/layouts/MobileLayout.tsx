import React from "react";
import Navigation from "../Navigation";

interface Props {
  children: React.ReactNode;
}

const MobileLayout = (props: Props) => {
  const { children } = props;
  return (
    <main className="flex items-center justify-center bg-gray-500">
      <div className="w-full relative bg-[#f2f2f7] !pt-4 h-full flex-col !pb-[8rem]">
        {children}
        <Navigation />
      </div>
    </main>
  );
};

export default MobileLayout;
