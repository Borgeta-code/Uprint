export default function Homescreen() {
  return (
    <>
      <section className="h-screen flex justify-center items-center bgHome bg-cover bg-no-repeat relative">
        <div className="flex justify-center items-center p-2 flex-col gap-6 mt-[100px]">
          <h1 className="font-bold text-5xl md:text-7xl text-center">
            Transforming dreams into <span className="gradient">print</span>.
          </h1>
          <span className="text-base text-black opacity-60 font-medium w-[90vw] md:w-[600px] text-center">
            Entre em contato para discutir suas ideias e fazer um orçamento hoje
            mesmo!
          </span>

          <div className="gradientBg p-[2px]">
            <button className="py-3 px-7 text-white btnGradient font-bold button">
              Entre em contato
            </button>
          </div>

          <div className="flex justify-center items-center gap-6">
            <div className="h-[2px] bg-black w-8 opacity-30" />
            <span className="text-sm text-black opacity-30 font-medium">
              ou
            </span>
            <div className="h-[2px] bg-black w-8 opacity-30" />
          </div>

          <div className="flex flex-col justify-center items-center">
            <a href="" className="font-bold text-base -mb-1">
              Saiba mais
            </a>
            <div className="h-[2px] w-full gradientUnderline" />
          </div>
        </div>
      </section>
    </>
  );
}
