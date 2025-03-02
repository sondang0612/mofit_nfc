"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const nav = [
  { id: 0, text: "Trang chủ", src: "/assets/svgs/home.svg", href: "/" },
  { id: 1, text: "Người dùng", src: "/assets/svgs/user.svg", href: "/user" },
  {
    id: 2,
    text: "Cài đặt",
    src: "/assets/svgs/setting.svg",
    href: "/settings",
  },
];

const Navigation = () => {
  const pathName = usePathname();
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <div className="bg-[#E8EAED] !pl-4 !pr-4 !pt-3 !pb-3 flex items-center justify-between">
        {nav.map((item) => (
          <button key={item.id}>
            <Link
              href={item.href}
              className={`flex items-center justify-center gap-1 flex-col ${
                pathName === item.href ? "opacity-100" : "opacity-50"
              }`}
            >
              <Image
                width={0}
                height={0}
                sizes="100%"
                alt="#"
                src={item.src}
                className="w-6 h-6"
              />
              <p className="text-[0.8125rem]">{item.text}</p>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
