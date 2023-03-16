import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export const SideBar = () => {
  const router = useRouter();
  return (
    <div className="min-w-[235px] bg-[rgb(12,18,25)] flex flex-col items-center justify-between py-[55px]">
      <h1 className="text-[#fff] text-[16px] font-semibold">Бүтээгдэхүүний нэр</h1>
      <div className="flex flex-col h-full w-full px-[45px] justify-between pt-[100px]">
        <div className="flex flex-col gap-[20px]">
          <button className="flex gap-[12px] h-[36px]" onClick={() => console.log("see pregress")}>
            <Image width={22} height={22} src="/SeeProgress.svg" alt={""} />
            <h1 className="text-[#fff] text-[16px] font-normal">Явц харах</h1>
          </button>
          <button className="flex gap-[12px] h-[36px]" onClick={() => console.log("workers")}>
            <Image width={22} height={22} src="/Workers.svg" alt="" />
            <h1 className="text-[#fff] text-[16px] font-normal">Ажилчид</h1>
          </button>
        </div>
        <button className="flex gap-[12px]" onClick={() => router.push("/")}>
          <Image width={22} height={22} src="/Vector.svg" alt="" />
          <h1 className="text-[#fff] text-[16px] font-normal">Гарах</h1>
        </button>
      </div>
    </div>
  );
};
