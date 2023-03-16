export default function Home() {
  return (
    <div className="flex w-full h-[100vh] max-w-[1920px] mx-auto">
      <section className="w-1/2 h-full flex flex-col items-center justify-center gap-[55px]">
        <h1 className="text-[24px] font-semibold text-[#0C1219] leading-[28px] w-[360px] ">Тавтай морил !</h1>
        <div className="flex flex-col gap-[20px]">
          <input type="email" placeholder="И-мэйл" />
          <input type="password" placeholder="Нууц үг" />
        </div>
        <button className="w-[360px] h-[45px] bg-[#0C1219] rounded-[5px] text-[#fff] text-[16px] font-medium">Нэвтрэх</button>
      </section>
      <section className="w-1/2 h-full bg-black"></section>
    </div>
  );
}
