import CommonSection from "@/components/CommonSection";
import CustomImage from "@/components/CustomImage";

const media = [
  { id: 0, src: "/assets/svgs/facebook-fill.svg", alt: "facebook" },
  { id: 1, src: "/assets/svgs/zalo.svg", alt: "zalo" },
  { id: 2, src: "/assets/svgs/linkedin.svg", alt: "linkedin" },
  { id: 3, src: "/assets/svgs/instagram.svg", alt: "instagram" },
];

const Page = () => {
  return (
    <div className="w-full flex-1 flex flex-col gap-4">
      <section className="bg-white !pl-4 !pr-4">
        <div className="flex items-center justify-between !pt-4 !pb-4">
          <div className="flex items-center gap-4">
            <CustomImage
              alt="#"
              src={"/assets/images/avatar.png"}
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <p className="font-medium text-base uppercase">Tien Mai</p>
              <p className="font-medium text-[0.625rem] uppercase text-[#939599]">
                Vị trí
              </p>
            </div>
            <CustomImage
              alt="#"
              src={"/assets/svgs/check-circle.svg"}
              className="w-6 h-6 self-start !mt-0.5 !ml-[-0.25rem]"
            />
          </div>
          <div className="flex flex-row items-center gap-4">
            <CustomImage
              alt="#"
              src={"/assets/svgs/qrcode-scan.svg"}
              className="w-6 h-6"
            />
            <CustomImage
              alt="#"
              src={"/assets/svgs/3Dots.svg"}
              className="w-6 h-6"
            />
          </div>
        </div>

        <div className="flex items-center !pt-2 !pb-2 gap-3">
          {media.map((item) => (
            <div
              key={item.id}
              className="rounded-full border border-[#D9D9D9] bg-[#f5f5f5] !p-2"
            >
              <CustomImage src={item.src} alt={item.alt} className="w-5 h-5" />
            </div>
          ))}
        </div>
      </section>
      <CommonSection title="Thông tin liên hệ" />
      <CommonSection title="Kinh nghiệm" />
      <CommonSection title="Bằng cấp / chứng chỉ" />
      <CommonSection title="Kỹ năng" />
      <CommonSection title="Khoá học đã tham gia" />
    </div>
  );
};

export default Page;
