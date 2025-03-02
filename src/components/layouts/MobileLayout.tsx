import React from "react";
import Navigation from "../Navigation";

interface Props {
  children: React.ReactNode;
}

const MobileLayout = (props: Props) => {
  const { children } = props;
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="bg-white w-full max-w-[500px] min-h-screen h-screen">
        <div className="w-full h-full relative bg-[#f2f2f7] !pt-4">
          {children}
          <Navigation />
        </div>
      </div>
    </main>
  );
};

export default MobileLayout;
